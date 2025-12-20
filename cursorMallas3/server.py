#!/usr/bin/env python3
"""
Servidor HTTP simple para visualizar el sitio web de Mallas Jerez
Uso: python server.py
"""

import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

# Configuración del servidor
PORT = 8000
HOST = 'localhost'

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Manejador personalizado para servir archivos estáticos"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.getcwd(), **kwargs)
    
    def end_headers(self):
        # Agregar headers para CORS y cache
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def log_message(self, format, *args):
        """Personalizar los mensajes de log"""
        print(f"[{self.log_date_time_string()}] {format % args}")

def check_files():
    """Verificar que los archivos necesarios existan"""
    required_files = ['index.html', 'assets/css/styles.css', 'assets/js/main.js']
    missing_files = []
    
    for file in required_files:
        if not os.path.exists(file):
            missing_files.append(file)
    
    if missing_files:
        print("❌ Archivos faltantes:")
        for file in missing_files:
            print(f"   - {file}")
        return False
    
    print("✅ Todos los archivos necesarios están presentes")
    return True

def start_server():
    """Iniciar el servidor HTTP"""
    try:
        # Verificar archivos
        if not check_files():
            print("\n❌ No se puede iniciar el servidor. Archivos faltantes.")
            return False
        
        # Crear el servidor
        with socketserver.TCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
            print(f"\n🚀 Servidor iniciado en http://{HOST}:{PORT}")
            print(f"📁 Sirviendo archivos desde: {os.getcwd()}")
            print(f"🌐 Abriendo navegador...")
            print(f"\n💡 Para detener el servidor presiona Ctrl+C")
            print("=" * 50)
            
            # Abrir navegador automáticamente
            try:
                webbrowser.open(f'http://{HOST}:{PORT}')
            except Exception as e:
                print(f"⚠️  No se pudo abrir el navegador automáticamente: {e}")
                print(f"   Abre manualmente: http://{HOST}:{PORT}")
            
            # Iniciar el servidor
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print(f"\n\n🛑 Servidor detenido por el usuario")
        return True
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Error: El puerto {PORT} ya está en uso")
            print(f"   Intenta con otro puerto o cierra la aplicación que lo está usando")
        else:
            print(f"❌ Error al iniciar el servidor: {e}")
        return False
    except Exception as e:
        print(f"❌ Error inesperado: {e}")
        return False

def main():
    """Función principal"""
    print("=" * 50)
    print("🌐 SERVIDOR WEB - MALLAS JEREZ")
    print("=" * 50)
    
    # Verificar versión de Python
    if sys.version_info < (3, 6):
        print("❌ Se requiere Python 3.6 o superior")
        print(f"   Versión actual: {sys.version}")
        return
    
    print(f"🐍 Python {sys.version.split()[0]} detectado")
    
    # Iniciar servidor
    success = start_server()
    
    if success:
        print("✅ Servidor cerrado correctamente")
    else:
        print("❌ Error al ejecutar el servidor")

if __name__ == "__main__":
    main()

