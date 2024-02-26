import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";


const Home = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);
    const deleteContact = (id) => {
        if(window.confirm("Are you sure you want to delete?")) {
            axios.delete(`http://localhost:5000/api/remove/${id}`);
            toast.success("Deleted successfully");
            setTimeout(() => loadData(), 500);
        }
    }
    return (
        <div style={{ marginTop: "150px"}}>
            <Link to="/addContact">
            <button className="btn btn.contact">Add Contact</button>
            </Link>
            
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        <th style={{textAlign: "center"}}>Product</th>
                        <th style={{textAlign: "center"}}>Brand</th>
                        <th style={{textAlign: "center"}}>Price</th>
                        <th style={{textAlign: "center"}}>Info</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>
                                  
                                    
                                    <Link to={`/view/${item.id}`}>
                                    <button className="btn btn-view">View</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Home