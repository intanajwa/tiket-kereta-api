let data = {
    kereta: "",
    penumpang: {
        nama: "",
        umur: "",
        jenisKelamin: ""
    },
    pembayaran: "",
    ktp: ""
};

function loadContent(page) {
    const content = document.getElementById('content');

    if (page === 'dashboard') {
        content.innerHTML = `
            <h2>Dashboard</h2>
            <p>Selamat datang di Sistem Tiket Kereta. Platform ini dirancang untuk mempermudah Anda dalam memesan tiket kereta api. Berikut adalah berita terkini dan informasi penting tentang kereta api:</p>
            <ul>
                <li><strong>Kereta Cepat Jakarta-Bandung Diresmikan!</strong> Menawarkan perjalanan lebih cepat dengan kecepatan hingga 350 km/jam.</li>
                <li><strong>Tiket Kereta Api Lebih Murah untuk Wisatawan.</strong> Pemerintah memberikan potongan harga tiket untuk wisatawan di musim liburan.</li>
                <li><strong>Penambahan Rute Kereta Api Ekspres ke Berbagai Kota.</strong> Kereta api kini melayani lebih banyak kota untuk kenyamanan pengguna.</li>
            </ul>
            <p>Pantau terus informasi terbaru terkait jadwal dan tiket di sistem kami.</p>
        `;
    } else if (page === 'formData') {
        content.innerHTML = `
            <h2>Form Data Kereta & Penumpang</h2>
            <form id="keretaForm">
                <h3>Form Pemilihan Kereta</h3>
                <label for="kereta">Pilih Kereta:</label>
                <select id="kereta" name="kereta" required>
                    <option value="ekspres">Kereta Ekspres</option>
                    <option value="malam">Kereta Malam</option>
                    <option value="local">Kereta Lokal</option>
                </select>
                <button type="button" onclick="submitKeretaForm()">Pilih Kereta</button>
            </form>

            <form id="penumpangForm">
                <h3>Form Data Penumpang</h3>
                <label for="nama">Nama Penumpang:</label>
                <input type="text" id="nama" name="nama" required>
                <label for="umur">Umur:</label>
                <input type="number" id="umur" name="umur" required>
                <label for="jenisKelamin">Jenis Kelamin:</label>
                <select id="jenisKelamin" name="jenisKelamin" required>
                    <option value="laki-laki">Laki-laki</option>
                    <option value="perempuan">Perempuan</option>
                </select>
                <button type="button" onclick="submitPenumpangForm()">Simpan Data Penumpang</button>
            </form>

            <form id="ktpForm">
                <h3>Upload KTP</h3>
                <label for="ktp">Upload Foto KTP:</label>
                <input type="file" id="ktp" name="ktp" accept="image/*" required>
                <button type="button" onclick="submitKTPForm()">Upload KTP</button>
            </form>

            <h3>Data Yang Dimasukkan:</h3>
            <div id="displayData">
                <p><strong>Kereta yang dipilih:</strong> ${data.kereta || 'Belum ada data'}</p>
                <p><strong>Nama Penumpang:</strong> ${data.penumpang.nama || 'Belum ada data'}</p>
                <p><strong>Umur:</strong> ${data.penumpang.umur || 'Belum ada data'}</p>
                <p><strong>Jenis Kelamin:</strong> ${data.penumpang.jenisKelamin || 'Belum ada data'}</p>
                <p><strong>Foto KTP:</strong> ${data.ktp ? '<img src="' + data.ktp + '" width="100">' : 'Belum ada data'}</p>
            </div>
        `;
    } else if (page === 'transaksi') {
        content.innerHTML = `
            <h2>Transaksi</h2>
            <form>
                <h3>Form ID Transaksi</h3>
                <label for="transaksi_id">ID Transaksi:</label>
                <input type="text" id="transaksi_id" name="transaksi_id" required>
                <button type="button" onclick="submitTransaksiID()">Cari Transaksi</button>
            </form>

            <form>
                <h3>Form Jumlah Tiket</h3>
                <label for="jumlah_tiket">Jumlah Tiket:</label>
                <input type="number" id="jumlah_tiket" name="jumlah_tiket" required>
                <button type="button" onclick="submitJumlahTiket()">Hitung Tiket</button>
            </form>

            <form>
                <h3>Form Metode Pembayaran</h3>
                <label for="pembayaran">Metode Pembayaran:</label>
                <select id="pembayaran" name="pembayaran" required>
                    <option value="transfer">Transfer Bank</option>
                    <option value="e_wallet">E-Wallet</option>
                    <option value="cod">Cash On Delivery</option>
                </select>
                <button type="button" onclick="submitPembayaran()">Konfirmasi Pembayaran</button>
            </form>
        `;
    } else if (page === 'laporan') {
        content.innerHTML = `
            <h2>Laporan</h2>
            <form>
                <h3>Form Pilih Laporan Berdasarkan Tanggal</h3>
                <label for="tanggal_laporan">Tanggal:</label>
                <input type="date" id="tanggal_laporan" name="tanggal_laporan" required>
                <button type="button" onclick="submitLaporanTanggal()">Tampilkan Laporan</button>
            </form>

            <form>
                <h3>Form Pilih Laporan Berdasarkan Jenis Transaksi</h3>
                <label for="jenis_transaksi">Jenis Transaksi:</label>
                <select id="jenis_transaksi" name="jenis_transaksi" required>
                    <option value="tiket">Tiket</option>
                    <option value="pembayaran">Pembayaran</option>
                </select>
                <button type="button" onclick="submitLaporanJenis()">Tampilkan Laporan</button>
            </form>

            <form>
                <h3>Form Pilih Laporan Berdasarkan Status</h3>
                <label for="status_laporan">Status Laporan:</label>
                <select id="status_laporan" name="status_laporan" required>
                    <option value="terbayar">Terbayar</option>
                    <option value="belum_terbayar">Belum Terbayar</option>
                </select>
                <button type="button" onclick="submitLaporanStatus()">Tampilkan Laporan</button>
            </form>
        `;
    }
}

function submitKeretaForm() {
    const kereta = document.getElementById('kereta').value;
    data.kereta = kereta;
    alert('Kereta yang dipilih: ' + kereta);
    loadContent('formData');
}

function submitPenumpangForm() {
    data.penumpang.nama = document.getElementById('nama').value;
    data.penumpang.umur = document.getElementById('umur').value;
    data.penumpang.jenisKelamin = document.getElementById('jenisKelamin').value;
    alert('Data penumpang berhasil disimpan.');
    loadContent('formData');
}

function submitKTPForm() {
    const ktpFile = document.getElementById('ktp').files[0];
    if (ktpFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            data.ktp = e.target.result;
            alert('KTP berhasil diupload.');
            loadContent('formData');
        };
        reader.readAsDataURL(ktpFile);
    }
}

// Fungsi untuk form transaksi
function submitTransaksiID() {
    const transaksiID = document.getElementById('transaksi_id').value;
    alert('Mencari transaksi dengan ID: ' + transaksiID);
    loadContent('laporan');
}

function submitJumlahTiket() {
    const jumlahTiket = document.getElementById('jumlah_tiket').value;
    alert('Jumlah tiket yang dipesan: ' + jumlahTiket);
}

function submitPembayaran() {
    const pembayaran = document.getElementById('pembayaran').value;
    alert('Metode pembayaran yang dipilih: ' + pembayaran);
}

function submitLaporanTanggal() {
    const tanggalLaporan = document.getElementById('tanggal_laporan').value;
    alert('Laporan untuk tanggal: ' + tanggalLaporan);
}

function submitLaporanJenis() {
    const jenisTransaksi = document.getElementById('jenis_transaksi').value;
    alert('Laporan jenis transaksi: ' + jenisTransaksi);
}

function submitLaporanStatus() {
    const statusLaporan = document.getElementById('status_laporan').value;
    alert('Laporan status: ' + statusLaporan);
}
