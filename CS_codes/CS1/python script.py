from scapy.all import sniff
import time 

def packet_callback(packet):
	print(packet.show())
	
for i in range(5):
	sniff(prn=packet_callback, store=0, count=1)
	time.sleep(1)
	
	
	
	
	
// output	

/* ###[ Ethernet ]###
  dst       = 33:33:ff:db:fc:36
  src       = bc:22:28:7e:c9:10
  type      = IPv6
###[ IPv6 ]###
     version   = 6
     tc        = 0
     fl        = 0
     plen      = 32
     nh        = ICMPv6
     hlim      = 255
     src       = fe80::6862:972d:7a85:36
     dst       = ff02::1:ffdb:fc36
###[ ICMPv6 Neighbor Discovery - Neighbor Solicitation ]###
        type      = Neighbor Solicitation
        code      = 0
        cksum     = 0x17
        res       = 0
        tgt       = fe80::7b6:4fc2:fddb:fc36
###[ ICMPv6 Neighbor Discovery Option - Source Link-Layer Address ]###
           type      = 1
           len       = 1
           lladdr    = 50:eb:f6:57:6c:5a

None
###[ Ethernet ]###
  dst       = 33:33:ff:db:fc:36
  src       = 64:29:43:1c:08:20
  type      = IPv6
###[ IPv6 ]###
     version   = 6
     tc        = 0
     fl        = 0
     plen      = 32
     nh        = ICMPv6
     hlim      = 255
     src       = fe80::6862:972d:7a85:36
     dst       = ff02::1:ffdb:fc36
###[ ICMPv6 Neighbor Discovery - Neighbor Solicitation ]###
        type      = Neighbor Solicitation
        code      = 0
        cksum     = 0x17
        res       = 0
        tgt       = fe80::7b6:4fc2:fddb:fc36
###[ ICMPv6 Neighbor Discovery Option - Source Link-Layer Address ]###
           type      = 1
           len       = 1
           lladdr    = 50:eb:f6:57:6c:5a

None
###[ Ethernet ]###
  dst       = 33:33:ff:db:fc:36
  src       = 64:29:43:1c:05:00
  type      = IPv6
###[ IPv6 ]###
     version   = 6
     tc        = 0
     fl        = 0
     plen      = 32
     nh        = ICMPv6
     hlim      = 255
     src       = fe80::6862:972d:7a85:36
     dst       = ff02::1:ffdb:fc36
###[ ICMPv6 Neighbor Discovery - Neighbor Solicitation ]###
        type      = Neighbor Solicitation
        code      = 0
        cksum     = 0x17
        res       = 0
        tgt       = fe80::7b6:4fc2:fddb:fc36
###[ ICMPv6 Neighbor Discovery Option - Source Link-Layer Address ]###
           type      = 1
           len       = 1
           lladdr    = 50:eb:f6:57:6c:5a

None
###[ Ethernet ]###
  dst       = 33:33:ff:db:fc:36
  src       = 64:29:43:1c:08:20
  type      = IPv6
###[ IPv6 ]###
     version   = 6
     tc        = 0
     fl        = 0
     plen      = 32
     nh        = ICMPv6
     hlim      = 255
     src       = fe80::6862:972d:7a85:36
     dst       = ff02::1:ffdb:fc36
###[ ICMPv6 Neighbor Discovery - Neighbor Solicitation ]###
        type      = Neighbor Solicitation
        code      = 0
        cksum     = 0x17
        res       = 0
        tgt       = fe80::7b6:4fc2:fddb:fc36
###[ ICMPv6 Neighbor Discovery Option - Source Link-Layer Address ]###
           type      = 1
           len       = 1
           lladdr    = 50:eb:f6:57:6c:5a

None
###[ Ethernet ]###
  dst       = 33:33:ff:db:fc:36
  src       = 64:29:43:1c:05:00
  type      = IPv6
###[ IPv6 ]###
     version   = 6
     tc        = 0
     fl        = 0
     plen      = 32
     nh        = ICMPv6
     hlim      = 255
     src       = fe80::6862:972d:7a85:36
     dst       = ff02::1:ffdb:fc36
###[ ICMPv6 Neighbor Discovery - Neighbor Solicitation ]###
        type      = Neighbor Solicitation
        code      = 0
        cksum     = 0x17
        res       = 0
        tgt       = fe80::7b6:4fc2:fddb:fc36
###[ ICMPv6 Neighbor Discovery Option - Source Link-Layer Address ]###
           type      = 1
           len       = 1
           lladdr    = 50:eb:f6:57:6c:5a

None
comp13@comp13:~/CS/CS1$ 

  */
