# Presupuesto estimado (Huancayo, Perú) - Iteración 0

**Tipo de cambio utilizado:** 1 USD = 3.4764 PEN (valor referencial, fuente: Investing / exchange data). citeturn1search14

> **Fuentes de precios consultadas:** DigitalOcean, Vercel, MongoDB Atlas, HostingPeru, VPS.com.pe, Render, OpenAI/Azure. (Citas al final). citeturn0search0turn0search1turn0search2turn0search12turn0search14turn0search15turn0search3

## Resumen mensual (costos operativos mínimos)

| Item | Cantidad | Precio unitario | Moneda | Precio (PEN) |
|---|---:|---:|---:|---:|
| VPS / servidor (1 vCPU, 1GB) - plan local (VPS.com.pe) | 1 | S/21.00 | PEN/month | S/21.00 (plan básico). citeturn0search14 |
| DigitalOcean Droplet (alternativa) | 1 | $6.00 | USD/month | S/20.86 (≈ S/20.86). citeturn0search0 |
| MongoDB Atlas (si no se usa free) - Shared | 1 | $9.00 | USD/month | S/31.29 (≈ S/31.29). citeturn0search10 |
| Dominio .pe / .com.pe (registro anual prorrateado) | 1 | S/118.0 / año (ej. S/9.82 mes) | PEN/year | S/9.82 mes (según HostingPeru promo). citeturn0search12 |
| Despliegue frontend (Vercel Hobby) | 1 | Gratis | USD/month | S/0.00 (Hobby plan). citeturn0search1 |
| Servicios de Render (staging / DB) - opcional | 1 | Gratis (instancias free) | USD/month | S/0.00 (limitado) citeturn0search15 |
| Reserva para APIs/NLP (OpenAI / Azure) - consumo bajo estimado | 1 | $20.00 | USD/month | S/69.53 (≈ S/69.53) - estimación inicial para pruebas. citeturn0search3turn0search11 |

**Total mensual estimado (mínimo, usando VPS local + MongoDB free + Vercel free):** S/ (21.00 + 0 + 0 + 9.82) ≈ S/30 (dominio + VPS)  
**Total mensual estimado (con MongoDB pagado + API pequeño):** S/131.64 ≈ S/131.64

## Recomendaciones prácticas para Huancayo
- Para pruebas y demo usar **Vercel Hobby (front)** + **MongoDB Atlas Free (M0)** + **Render free / VPS local** para backend, así mantendrán costos cercanos a S/10–30 mensuales. citeturn0search1turn0search2turn0search15  
- Si requieren mayor disponibilidad o ejecutar modelos de NLP en la nube (GPU), considerar DigitalOcean GPU droplets o servicios de Gradient - estos aumentan drásticamente el costo (desde $20-$100+ / mes). citeturn0search8

## Notas
- Los precios varían según promos, impuestos (IGV) y cambios de tipo de cambio. Se recomienda verificar los enlaces proporcionados antes de contratar.
- Para el presupuesto del curso, suele aceptarse la alternativa "uso de cuentas gratuitas y pruebas locales" como opción válida; sin embargo, para producción conviene un plan pago mínimo.

### Fuentes
- DigitalOcean Droplets pricing. citeturn0search0  
- Vercel Hobby plan (gratis). citeturn0search1  
- MongoDB Atlas pricing (Free + paid tiers). citeturn0search2turn0search10  
- Hosting Perú - dominios. citeturn0search12  
- VPS.com.pe plan local (Huancayo-friendly). citeturn0search14  
- Render free instances. citeturn0search15  
- OpenAI / Azure pricing (referencia de APIs). citeturn0search3turn0search11
