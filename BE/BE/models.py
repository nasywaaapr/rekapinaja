from django.db import models
from django.contrib.auth.models import User

# Model Akun (Menggunakan Default User)
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_pedagang = models.BooleanField(default=True)  # True untuk pedagang, False untuk admin
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

# Model Rekapan Harian
class RekapanHarian(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tanggal = models.DateField(auto_now_add=True)
    pemasukan = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    pengeluaran = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    sudah_dientri = models.BooleanField(default=False)

    class Meta:
        ordering = ['-tanggal']

    def __str__(self):
        return f"Rekapan {self.tanggal} oleh {self.user.username}"

# Model Gaji Pegawai
class GajiPegawai(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    nama_pegawai = models.CharField(max_length=255)
    nominal_gaji = models.DecimalField(max_digits=12, decimal_places=2)
    periode = models.CharField(max_length=10, choices=[('minggu', 'Mingguan'), ('bulan', 'Bulanan')])
    tanggal_gaji = models.DateField()

    def __str__(self):
        return f"Gaji {self.nama_pegawai} oleh {self.user.username}"

# Model Hutang Piutang
class HutangPiutang(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    nama_pihak = models.CharField(max_length=255)
    jumlah = models.DecimalField(max_digits=12, decimal_places=2)
    jenis = models.CharField(max_length=10, choices=[('hutang', 'Hutang'), ('piutang', 'Piutang')])
    status = models.BooleanField(default=False)  # False untuk belum lunas, True untuk lunas
    tanggal_transaksi = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.jenis.capitalize()} {self.nama_pihak} oleh {self.user.username}"

# Model Forum Diskusi
class ForumDiskusi(models.Model):
    judul = models.CharField(max_length=255)
    konten = models.TextField()
    tanggal_dibuat = models.DateTimeField(auto_now_add=True)
    penulis = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.judul

# Model Komentar Diskusi
class KomentarDiskusi(models.Model):
    forum = models.ForeignKey(ForumDiskusi, on_delete=models.CASCADE, related_name='komentar')
    penulis = models.ForeignKey(User, on_delete=models.CASCADE)
    konten = models.TextField()
    tanggal_dibuat = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Komentar oleh {self.penulis.username} di {self.forum.judul}"

# Model Analisis Keuangan
class AnalisisKeuangan(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    jenis_analisis = models.CharField(max_length=20, choices=[('otomatis', 'Otomatis'), ('kustom', 'Kustom')])
    tanggal_analisis = models.DateTimeField(auto_now_add=True)
    hasil_analisis = models.TextField()

    def __str__(self):
        return f"Analisis {self.jenis_analisis} oleh {self.user.username}"
