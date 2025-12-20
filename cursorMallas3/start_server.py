#!/usr/bin/env python3
"""
Script simple para iniciar el servidor web
"""

import http.server
import socketserver
import webbrowser
import os

PORT = 8000

def main():
    print("🌐 Iniciando servidor web...")
    print(f"📁 Directorio: {os.getcwd()}")
    print(f"🌐 URL: http://localhost:{PORT}")
    print("💡 Presiona Ctrl+C para detener")
    print("-" * 40)
    
    try:
        with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
            print(f"✅ Servidor iniciado en puerto {PORT}")
            webbrowser.open(f'http://localhost:{PORT}')
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Servidor detenido")
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    main()

