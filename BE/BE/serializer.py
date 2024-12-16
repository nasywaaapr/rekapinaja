from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from .models import Profile, RekapanHarian, GajiPegawai, HutangPiutang, KomentarDiskusi, ForumDiskusi, AnalisisKeuangan

class DaftarSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
    def validate(self, attrs):
        username = attrs.get('username', '')
        email = attrs.get('email', '')
        if not username.isalnum():
            raise serializers.ValidationError('Username hanya boleh berisi huruf dan angka.')
        return attrs
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    
class MasukSerializer(serializers.Serializer):
        username = serializers.CharField()
        password = serializers.CharField(write_only=True)

        def validate(self, data):
             user = authenticate(username=data['username'], password=data['password'])

             if not user:
                 raise serializers.ValidationError('Invalid credentials.')
             
             refresh = RefreshToken.for_user(user)

             return{
                 'user' : user.username,
                 'tokens' : {
                     'tokenBaru' : str(refresh),
                     'aksesToken' : str(refresh.access_token)
                 }
             }
        
class KeluarSerializer (serializers.Serializer):
    refresh = serializers.CharField()

    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs
    def save(self, **kwargs):
        try :
            RefreshToken(self.token).blacklist()
        except TokenError:
            self.fail('Error')

class ProfileSerializer (serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class RekapanHarianSerializer (serializers.ModelSerializer):
    class Meta:
        model = RekapanHarian
        fields = '__all__'

class GajiPegawaiSerializer (serializers.ModelSerializer):
    class Meta:
        model = GajiPegawai
        fields = '__all__'

class HutangPiutangSerializer (serializers.ModelSerializer):
    class Meta:
        model = HutangPiutang
        fields = '__all__'

class ForumDiskusiSerializer (serializers.ModelSerializer):
    class Meta:
        model = ForumDiskusi
        fields = '__all__'

class KomentarDiskusiSerializer (serializers.ModelSerializer):
    class Meta:
        model = KomentarDiskusi
        fields = '__all__'

class AnalisisKeuanganSerializer (serializers.ModelSerializer):
    class Meta:
        model = AnalisisKeuangan
        fields = '__all__'