# ngest_nodered

Converts an array of dictionaries into nGest format that can be sent directly to a nGest feed. Timestamp will be set at current time.

Msg.payload in: 
```
msg.payload : array[2]
array[2]
0: object
  name: "switch1"
  value: "true"
1: object
  name: "switch2"
  value: "true"
```

msg.payload out:

```
msg.payload : Object
object
type: "timeseries"
data: array[2]
  0: object
    timestamp: "1571748448099"
    data: object
      switch1: object
        value: "false"
  1: object
    timestamp: "1571748448099"
    data: object
      switch2: object
        value: "true"
```
