// Serveur Go des démos TMaps : sert le dossier demos/ et génère
// /shared/config.js à partir de la variable d'environnement TMAPS_API_KEY.
package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
)

func main() {
	port := getenv("PORT", "8080")
	dir := getenv("DEMOS_DIR", "../../demos")
	key, _ := json.Marshal(getenv("TMAPS_API_KEY", "YOUR_API_KEY"))
	configJS := []byte("window.TMAPS_API_KEY = " + string(key) + ";\n")

	mux := http.NewServeMux()
	mux.HandleFunc("GET /shared/config.js", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/javascript; charset=utf-8")
		w.Header().Set("Cache-Control", "no-store")
		w.Write(configJS)
	})
	mux.Handle("/", http.FileServer(http.Dir(dir)))

	log.Printf("TMaps demos (Go) listening on :%s, serving %s", port, dir)
	log.Fatal(http.ListenAndServe(":"+port, mux))
}

func getenv(name, fallback string) string {
	if value := os.Getenv(name); value != "" {
		return value
	}
	return fallback
}
