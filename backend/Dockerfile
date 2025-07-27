FROM python:3.11-slim

# 🛠️ Prepara entorno base de apt antes de instalar cualquier cosa
RUN apt-get update && apt-get install -y \
    gcc \
    build-essential \
    libmariadb-dev \
    default-libmysqlclient-dev \
    curl \
    netcat-openbsd \
    apt-utils \
    ca-certificates \
    pkg-config \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# 🐍 Variables para que Python no bufee output
ENV PYTHONUNBUFFERED=1

# Carpeta de trabajo
WORKDIR /app

# Copiar y cachear dependencias
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto de la app
COPY . .

# Puerto expuesto
EXPOSE 8080

# Comando de arranque con Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "authenticotours.wsgi:application"]
