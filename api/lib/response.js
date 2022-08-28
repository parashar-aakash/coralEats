const getResponse = (res, data) => {
    res.status(200).json({
        success: true,
        code: 200,
        data
    });
}

const updateResponse = (res, data, message) => {
    res.send({
        message,
        success: true,
        code: 200,
        data
    });
}

export {
    getResponse,
    updateResponse
};
