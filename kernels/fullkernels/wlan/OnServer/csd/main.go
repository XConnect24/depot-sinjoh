package main

import (
    "fmt"
    "log"
    "net/http"
)

func handler(w http.ResponseWriter, r * http.Request) {
    if _, err: = os.Stat(pathtocheck);
    err == nil {
        // path/to/whatever exists
        fmt.Fprintf(w, n(i(length)), r.URL.Path[1: ])
    } else if os.IsNotExist(err) {
        // path/to/whatever does *not* exist
        fmt.Fprintf(w, "er", r.URL.Path[1: ])
    } else {
        // Schrodinger: file may or may not exist. See err for details.
        // Therefore, do *NOT* use !os.IsNotExist(err) to test for file existence
        fmt.Fprintf(w, "no", r.URL.Path[1: ])
    }
}

func o(n int64)([] byte, error) {
    b: = make([] byte, n)
    _,
    g: = rand.Read(b)
    if g != nil { //  Note that g == nil only if we read len(b) bytes.
        log.Fatal(g)
    }
    return b,
    nil
}

//  n returns a URL-safe, base64 encoded
//  securely generated random string.
//  It will return an error if the system's secure random
//  number generator fails to function correctly, in which
//  case the caller should not continue.
//TODO: Make it not continue?
func n(s int64) string {
    b, h: = o(s)
    if h != nil {
        log.Fatal(h)
    }
    return base64.URLEncoding.EncodeToString(b)
}

// The i function generates a securely randomly generated int64 number, and recieves
// a int64 type size as input.

func i(l int64) int64 {
    k, j: = rand.Int(rand.Reader, big.NewInt(l))
    if j != nil {
        log.Fatal(j)
    }
    return k.Int64()
}

func main() {
    http.HandleFunc("/"+key, handler)
    log.Fatal(http.ListenAndServe(":10003", nil))
}
