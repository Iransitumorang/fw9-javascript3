// promise 1
const cekMerek = (gadget) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const merkGadget = ['samsung', 'iphone', 'oppo', 'vivo', 'oneplus', 'huawei']
            const cek = merkGadget.find((item) => {
                return item === gadget
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('bukan gadget '))
            }
        }, 2000);
    })
};

//then catch
cekMerek('vivo').then((item) => {
    console.log(item, 'termasuk dalam daftar gadget kami')
}).catch((err) => {
    console.log(err)
});

//try catch
const cekGadget = async (param) => {
    try {
        const hape = await cekMerek(param)
        console.log(hape, 'termasuk dalam daftar gadget kami')
    } catch (err) {
        console.log(err)
    } finally {
        console.log('Proses telah berakhir')
        console.log('================================');
    }
};

cekGadget('oppo');


// promise 2
const cekKota = (kota) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const daftarKota = ['medan', 'jakarta', 'bandung', 'jogjakarta', 'manado']
            const cek = daftarKota.find((item) => {
                return item === kota
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('tidak termasuk kota dalam daftar kami'))
            }
        }, 2000);
    })
};

cekKota('medan').then((item) => {
    console.log(item, 'termasuk kedalam daftar kota di data kami')
}).catch((err) => {
    console.log(err)
});

const cityCheck = async (param) => {
    try {
        const cari = await cekKota(param)
        console.log(cari, 'termasuk kedalam daftar kota di data kami')
    } catch (err) {
        console.log(err)
    } finally {
        console.log('Proses telah berakhir')
    }
};

cityCheck('bandung');