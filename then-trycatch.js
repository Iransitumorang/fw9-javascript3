const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
};

cekHariKerja('kamis').then((item) => {
    console.log(item, 'adalah hari kerja')
}).catch((e) => {
    console.log(e)
});

async function iniCatch(param) {
    try {
        const day = await cekHariKerja(param)
        console.log(day, 'adalah hari kerja')
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Proses telah selesai')
    }
};

iniCatch('rabu');