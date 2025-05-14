# Imagen base con Python
FROM python:3.10-slim

# Variables para evitar archivos .pyc y mostrar logs
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Establece la carpeta de trabajo dentro del contenedor
WORKDIR /app

# Instala dependencias
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto del backend al contenedor
COPY . .

# Recolecta archivos estáticos (si usás whitenoise)
RUN python manage.py collectstatic --noinput

# Ejecuta gunicorn apuntando a tu wsgi.py
CMD ["gunicorn", "authenticotours.wsgi:application", "--bind", "0.0.0.0:8080"]
