# varnish_sandbox

- sudo pkill varnishd
- sudo varnishd -a 127.0.0.1:9091 -b 127.0.0.1:9090 -s file,/tmp,500M
- OR sudo varnishd -a 127.0.0.1:9091 -f /opt/local/etc/varnish/default.vcl -s file,/tmp,500M
- varnishlog
- config: /opt/local/etc/varnish/default.vcl
