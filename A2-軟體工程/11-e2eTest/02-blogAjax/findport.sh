# windows:netstat -aon | findstr '[8000]'

# linux: netstat -ltnp | grep -w ':8000'

netstat -vanp tcp | grep 8000