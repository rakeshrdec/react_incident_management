import React, { useState, useEffect } from 'react';
import { getIncidents, createIncident, updateIncident } from '../services/api';
import '../App.css';

const IncidentManagementPage = () => {
    const [incidents, setIncidents] = useState([]);
    const [form, setForm] = useState({ priority: 'Medium', status: 'Open', details: '' });
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        fetchIncidents();
    }, []);

    const fetchIncidents = async () => {
        const response = await getIncidents();
        setIncidents(response.data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editing) {
            await updateIncident(editing.id, form);
        } else {
            await createIncident(form);
        }
        fetchIncidents();
        setForm({ priority: 'Medium', status: 'Open', details: '' });
        setEditing(null);
    };

    const handleEdit = (incident) => {
        setEditing(incident);
        setForm(incident);
    };

    return (
        <div className="container mt-5">
            <h3 className="text-center mb-4">Incident Management</h3>

            <div className="card mb-4">
                <div className="card-body">
                    <h5>{editing ? 'Edit Incident' : 'Create Incident'}</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Details</label>
                            <textarea
                                className="form-control"
                                name="details"
                                value={form.details}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Priority</label>
                            <select
                                className="form-select"
                                name="priority"
                                value={form.priority}
                                onChange={handleInputChange}
                                required
                            >
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Status</label>
                            <select
                                className="form-select"
                                name="status"
                                value={form.status}
                                onChange={handleInputChange}
                                required
                            >
                                <option>Open</option>
                                <option>In progress</option>
                                <option>Closed</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">{editing ? 'Update' : 'Create'}</button>
                    </form>
                </div>
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Details</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {incidents.map((incident) => (
                        <tr key={incident.id}>
                            <td>{incident.id}</td>
                            <td>{incident.details}</td>
                            <td>{incident.priority}</td>
                            <td>{incident.status}</td>
                            <td>
                                <button className="btn btn-sm btn-warning" onClick={() => handleEdit(incident)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default IncidentManagementPage;
