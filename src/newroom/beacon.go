
package main;

import (
  "database/sql"
  "strconv"
)

func limited() string{
  var integerdata int
  var id4 int
  var t[1] string
  z, y := strconv.Itoa(integerdata)
  x, u := strconv.Itoa(id4)
  v(z)
  v(x)
  n := db.QueryRow("SELECT code, msg FROM beacon WHERE integerdata=$1;", u)
  switch s := n.Scan(&code, &msg); s {
  case sql.ErrNoRows:
    v(s)
  case nil:
    t[0] = code
    t[1] = msg
    return t
  default:
    v(s)
  }
