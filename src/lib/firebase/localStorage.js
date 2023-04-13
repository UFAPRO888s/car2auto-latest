export const getlocalStorage = (key) => {
   const StorageData = localStorage.getItem(key)
    console.log(StorageData)
    if (!StorageData) {
        return
    }
    return JSON.parse(StorageData)
}

export const setlocalStorage = (key,dataST) => {
    const StorageData = localStorage.setItem(key, dataST);
    console.log(StorageData);
    
}

export const removelocalStorage = (key) => localStorage.setItem(key,"")