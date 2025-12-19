import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddMedicine = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    problem: "",
    timing: "",
    foodRelation: "",
    alarmTime: ""
  });
  const [alarms, setAlarms] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const setAlarm = async (medicineData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/alarm/set', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          medicineId: medicineData._id,
          alarmTime: form.alarmTime,
          medicineName: form.name
        })
      });
      const alarmData = await response.json();
      if (response.ok) {
        console.log('Alarm set:', alarmData);
      }
    } catch (error) {
      console.error('Alarm error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/medicine/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (response.ok) {
        if (Notification.permission === 'granted') {
          new Notification(`Medicine Added: ${form.name}`, {
            body: `Alarm set for ${form.alarmTime} | ${form.foodRelation}`,
            icon: '💊'
          });
        }
        await setAlarm(data.medicine);
        navigate('/medicine-list');
      } else {
        console.error('Failed to add medicine:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 flex justify-center items-center px-4">
      <div className="bg-white shadow-2xl p-8 rounded-2xl border border-emerald-100 w-full max-w-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-emerald-400/10 to-teal-400/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-linear-to-tr from-emerald-400/10 to-teal-400/10 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">💊</span>
            </div>
            <h2 className="text-3xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Add Medicine</h2>
            <p className="text-gray-600 mt-2">Track your medication schedule</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Medicine Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                placeholder="Enter medicine name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">For What Problem</label>
              <input
                type="text"
                name="problem"
                value={form.problem}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                placeholder="e.g., Headache, Fever"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">When to Take</label>
              <select
                name="timing"
                value={form.timing}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                required
              >
                <option value="">Select timing</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Night">Night</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Food Relation</label>
              <select
                name="foodRelation"
                value={form.foodRelation}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                required
              >
                <option value="">Select option</option>
                <option value="Before Food">Before Food</option>
                <option value="After Food">After Food</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alarm Time</label>
              <input
                type="time"
                name="alarmTime"
                value={form.alarmTime}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Add Medicine
            </button>
          </form>

          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => navigate('/medicine-list')}
              className="flex-1 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors py-2"
            >
              View Medicines
            </button>
            <button
              onClick={() => navigate('/home')}
              className="flex-1 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors py-2"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMedicine;