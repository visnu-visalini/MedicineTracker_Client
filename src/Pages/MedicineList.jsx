import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MedicineList = () => {
  const navigate = useNavigate();
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [takenMedicines, setTakenMedicines] = useState(new Set());

  const markAsTaken = (medicineId) => {
    setTakenMedicines(prev => new Set([...prev, medicineId]));
  };

  const isTaken = (medicineId) => {
    return takenMedicines.has(medicineId);
  };

  const formatTime = (time24) => {
    const [hours, minutes] = time24.split(':');
    const hour12 = hours % 12 || 12;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    return `${hour12}:${minutes} ${ampm}`;
  };

  const playAlarmSound = () => {
    const audio = new Audio('./src/assets/mixkit-retro-game-emergency-alarm-1000.wav');
    audio.volume = 0.8;
    audio.play().catch(e => {
      console.log('Audio play failed:', e);
      // Fallback: try different path
      const audio2 = new Audio('/assets/mixkit-retro-game-emergency-alarm-1000.wav');
      audio2.play().catch(err => console.log('Fallback audio failed:', err));
    });
  };

  const checkAlarmTime = () => {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    console.log('Current time:', currentTime);
    
    medicines.forEach(medicine => {
      console.log('Medicine alarm time:', medicine.alarmTime);
      if (medicine.alarmTime === currentTime) {
        console.log('ALARM TRIGGERED for:', medicine.name);
        playAlarmSound();
        if (Notification.permission === 'granted') {
          new Notification(`Time to take ${medicine.name}!`, {
            body: `${medicine.problem} | ${medicine.foodRelation}`,
            icon: '💊'
          });
        }
      }
    });
  };

  const requestNotificationPermission = () => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  };

  useEffect(() => {
    requestNotificationPermission();
    fetchMedicines();
  }, []);

  useEffect(() => {
    if (medicines.length > 0) {
      const interval = setInterval(checkAlarmTime, 10000); // Check every 10 seconds for testing
      return () => clearInterval(interval);
    }
  }, [medicines]);

  const fetchMedicines = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/medicine/list', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        setMedicines(data);
      }
    } catch (error) {
      console.error('Error fetching medicines:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 flex justify-center items-center">
        <div className="text-emerald-600 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            My Medicines
          </h1>
          <p className="text-gray-600 mt-2">Track your medication schedule</p>
        </div>

        {medicines.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💊</div>
            <h3 className="text-xl text-gray-600 mb-4">No medicines added yet</h3>
            <button
              onClick={() => navigate('/add-medicine')}
              className="bg-linear-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Add Your First Medicine
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {medicines.map((medicine) => (
              <div key={medicine._id} className={`rounded-3xl p-6 shadow-xl border transition-all duration-300 transform hover:-translate-y-1 ${
                isTaken(medicine._id) 
                  ? 'bg-gray-200 border-gray-300 opacity-70' 
                  : 'bg-white border-emerald-100 hover:shadow-2xl'
              }`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                    isTaken(medicine._id)
                      ? 'bg-gray-400'
                      : 'bg-linear-to-r from-emerald-500 to-teal-500'
                  }`}>
                    <span className="text-white text-2xl">💊</span>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className={`text-xl font-bold mb-1 ${
                      isTaken(medicine._id) ? 'text-gray-600' : 'text-gray-800'
                    }`}>{medicine.name}</h3>
                    <p className={`text-sm font-medium px-3 py-1 rounded-full inline-block ${
                      isTaken(medicine._id)
                        ? 'text-gray-500 bg-gray-100'
                        : 'text-emerald-600 bg-emerald-50'
                    }`}>{medicine.problem}</p>
                  </div>
                  <button
                    onClick={() => markAsTaken(medicine._id)}
                    disabled={isTaken(medicine._id)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isTaken(medicine._id)
                        ? 'bg-green-500 cursor-not-allowed'
                        : 'bg-gray-200 hover:bg-green-500 hover:text-white'
                    }`}
                  >
                    {isTaken(medicine._id) ? '✓' : '✓'}
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className={`rounded-xl p-4 space-y-3 ${
                    isTaken(medicine._id) ? 'bg-gray-100' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">⏰</span>
                        <span className={`font-medium ${
                          isTaken(medicine._id) ? 'text-gray-500' : 'text-gray-700'
                        }`}>Timing</span>
                      </div>
                      <span className={`font-bold ${
                        isTaken(medicine._id) ? 'text-gray-500' : 'text-emerald-600'
                      }`}>{medicine.timing}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">🍽️</span>
                        <span className={`font-medium ${
                          isTaken(medicine._id) ? 'text-gray-500' : 'text-gray-700'
                        }`}>Food</span>
                      </div>
                      <span className={`font-bold ${
                        isTaken(medicine._id) ? 'text-gray-500' : 'text-teal-600'
                      }`}>{medicine.foodRelation}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">🔔</span>
                        <span className={`font-medium ${
                          isTaken(medicine._id) ? 'text-gray-500' : 'text-gray-700'
                        }`}>Alarm</span>
                      </div>
                      <span className={`font-bold text-lg ${
                        isTaken(medicine._id) ? 'text-gray-500' : 'text-purple-600'
                      }`}>{formatTime(medicine.alarmTime)}</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Added {new Date(medicine.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-8 space-x-4">
          <button
            onClick={() => navigate('/add-medicine')}
            className="bg-linear-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Add Medicine
          </button>
          <button
            onClick={() => navigate('/home')}
            className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors px-6 py-3"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineList;