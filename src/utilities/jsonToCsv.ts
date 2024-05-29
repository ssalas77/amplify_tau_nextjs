const jsonToCsv = (json: any) => {
    const headers = Object.keys(json).join(',');
    const values = Object.values(json).join(',');
    return `${headers}\n${values}`;
};

export default jsonToCsv;