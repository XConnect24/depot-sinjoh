package main

import (
"net/http"
)
func runsite(){
http.HandleFunc(combine(address5, key), handler)
http.ListenAndServe(address5, runnerstate)
}
