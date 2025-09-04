



const saveNewData  = (data) => {
    const data_json = JSON.stringify (data);
    locjalStorage.setItem("arr", data_json);
    }

    const arr = [
        "Andrey","Victor","John"
    ];
