import fetch from 'node-fetch';

export const fetchData = async(req, res) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const dataApi = await response.json();
        return res.status(200).json({
            success: true,
            dataApi
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong',
            error: error.message
        });
    }
}