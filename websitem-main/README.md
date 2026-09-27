# websitem

Bu site statik bir web sayfasıdır ve GitHub Pages üzerinden yayımlanabilir. Aynı zamanda özel alan adı olarak h4usa.com.tr kullanılarak da servis edilebilir.

## GitHub Pages kurulumu

1. Projeyi GitHub'a gönderin.
2. GitHub repo → Settings → Pages menüsüne gidin.
3. Source olarak GitHub Actions seçin.
4. Ana branch üzerindeki otomatik deploy akışı çalışmaya başlayacaktır.

## Özel alan adı (h4usa.com.tr)

- Proje kökünde bulunan CNAME dosyası zaten h4usa.com.tr değerini tutuyor.
- GitHub Pages'te custom domain olarak h4usa.com.tr yazın.
- Alan adı sağlayıcınızda DNS kayıtlarını aşağıdaki şekilde ayarlayın:

  - A kayıtları:
    - 185.199.108.153
    - 185.199.109.153
    - 185.199.110.153
    - 185.199.111.153
  - www için CNAME:
    - <github-kullanici>.github.io

## Not

Bu yapı, siteyi hem GitHub Pages üzerinden erişilebilir hale getirir hem de h4usa.com.tr adresiyle yayınlanmasını mümkün kılar.
