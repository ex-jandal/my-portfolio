---
tags: [brain-map, roadmap]
owner: Abu Jandal
created: 2026-06-21
---

# BRAIN-MAP.md — Living Roadmap

> **Owner:** Abu Jandal
> **Created:** 2026-06-21
> **Purpose:** Personalized cybersecurity learning roadmap from first principles to mastery.
> **Style:** Sequential tracks, free resources only, hands-on first.

---

## 1. Personal Baseline

| Attribute           | Detail                                          |
| ------------------- | ----------------------------------------------- |
| Education           | 3rd-year cybersecurity student                  |
| OS / Daily Driver   | Arch Linux (3 years experience)                 |
| Shell               | fish                                            |
| Virtualization      | VMM (Kali, Parrot, etc. experience)             |
| Time Available      | Full-time student                               |
| Certification Goal  | None currently (may reconsider after first job) |
| Learning Style      | Hands-on projects + theory                      |
| Language Preference | English                                         |
| Portfolio           | me.soltanmeged.workers.dev (Svelte)             |

### Mindset Principles

- Build things, don't just read.
- If you haven't crashed a debugger or triggered a segfault today, you didn't learn enough.
- Free resources first. Pay only when free ceiling is reached.
- Document everything you learn (this file is your starting point).

---

## 2. Knowledge Inventory

### 2.1 Languages

| Language              | Level     | Evidence                                                             |
| --------------------- | --------- | -------------------------------------------------------------------- |
| Python                | Strong    | CLI tool: Android Emulator Selector (interactive UI, AVD management) |
| Zig                   | Medium    | CLI tool with mutex, async/await, posix-terminal opts                |
| C                     | Basic     | Understands structs, allocations/deallocations, build systems        |
| Assembly (x86-64 ELF) | Basic     | Built a file viewer in NASM (print file contents)                    |
| Bash / Fish           | Competent | Daily-drives Arch, comfortable with shell                            |
| HTML / CSS            | Strong    | Built portfolio and websites                                         |
| JavaScript            | Strong    | Svelte-based apps                                                    |
| Svelte                | Strong    | Portfolio at me.soltanmeged.workers.dev                              |

### 2.2 Systems & Networking

| Domain            | Level      | Details                                                          |
| ----------------- | ---------- | ---------------------------------------------------------------- |
| Linux Internals   | Power User | Arch daily driver (3yr), VMM, filesystem, processes, permissions |
| Networking L1/L2  | Solid      | Cabling, VLANs, switch/router/endpoint configuration             |
| Build Systems     | Familiar   | Understands how build systems work (Make, CMake, Zig build)      |
| Concurrency       | Basic      | Mutexes, async/await (Zig)                                       |
| Operating Systems | Studying   | Dedicated university course, deep understanding                  |

### 2.3 Cybersecurity

| Domain                | Level  | Notes                    |
| --------------------- | ------ | ------------------------ |
| General Cybersecurity | Novice | Starting from near-zero  |
| Reverse Engineering   | Novice | No experience            |
| Binary Exploitation   | Novice | No experience            |
| Web Pentesting        | Novice | Will study this semester |
| Cryptography          | Novice | Will study this semester |
| Incident Response     | Novice | Will study this semester |
| CTF Experience        | None   | Haven't started          |

---

## 3. The Roadmap (Sequential)

The roadmap is divided into three phases plus a foundational track. Phases build on each other.

```
Phase 0: Operating Systems (alongside Phase 1) ────────►
                              │
                              ▼
Phase 1: Reverse Engineering ──────────────────────────►
                              │
                              ▼
                    Phase 2: Binary Exploitation ──────►
                              │
                              ├─────────────────────────►
                              ▼
                    Phase 3: Web Pentesting (overlaps)
```

- **Phase 0 (Operating Systems)** runs **alongside Phase 1**. Study OS concepts and RE in parallel — they reinforce each other. You need OS knowledge (virtual memory, processes, syscalls, memory layout) to truly understand RE.
- **Phase 1** must be completed before starting Phase 2.
- **Phase 3** can begin once Phase 1 is solid (the two complement each other).
- Within each phase, work through skills in order.

---

### Phase 0 — Operating Systems (alongside Phase 1)

**Goal:** Deep understanding of OS internals — processes, memory, syscalls, synchronization, file systems. This is both a university course and a foundation for RE and binary exploitation.

**Relationship to other phases:** Study this **alongside** Phase 1. OS concepts and RE reinforce each other. You'll see syscalls in disassembly, map process memory layout, and understand how the kernel manages execution.

#### Skill Tree (complete in order)

```
1. Processes
   ├── Process creation (fork, exec, clone)
   ├── Process states & scheduling basics
   ├── Context switching (what the kernel saves/restores)
   ├── Process Control Block (PCB) structure
   └── Copy-on-write semantics

2. Memory Layout & Virtual Memory
   ├── Process address space (stack, heap, BSS, data, text)
   ├── Virtual memory concept (VA → PA translation)
   ├── Paging & page tables (multi-level, TLB)
   ├── Demand paging & page faults
   ├── Memory allocation: sbrk, brk, mmap, munmap
   ├── malloc internals (glibc: ptmalloc, chunks, bins)
   └── mmap — file-backed vs anonymous, shared vs private

3. System Calls
   ├── syscall instruction vs int 0x80
   ├── Calling convention (rax = number, args in rdi, rsi, rdx, r10, r8, r9)
   ├── Wrapper functions in libc
   ├── Commonly reversed syscalls (read, write, open, mmap, mprotect, execve)
   └── Tracing syscalls with strace

4. File Systems
   ├── Virtual File System (VFS) abstraction
   ├── Inodes, dentries, superblock
   ├── File descriptors & open file table
   ├── Pipes, FIFOs, sockets as file descriptors
   └── I/O redirection and dup2

5. Synchronization & IPC
   ├── Mutexes, semaphores, condition variables
   ├── Spinlocks vs sleeping locks
   ├── Race conditions & critical sections
   ├── Inter-process communication: pipes, signals, shared memory, message queues
   └── Deadlock: conditions, prevention, detection

6. Security & Protection
   ├── Protection rings (ring 0 kernel, ring 3 user)
   ├── Kernel vs user mode transitions
   ├── ASLR, NX, stack canary (kernel-enforced)
   ├── seccomp (secure computing mode)
   └── Capabilities & LSM (Linux Security Modules)

7. Practical Projects (capstone)
   ├── Write a simple memory allocator (malloc/free) in C
   ├── Build a minimal shell with pipes and redirection
   ├── Write a mini-strace in C using ptrace
   ├── Implement a simple ELF loader (map + run a binary)
   └── Virtual memory simulator (page tables, TLB, paging)
```

**Estimated time:** Ongoing (university semester) — prioritize topics that intersect with Phase 1 (memory layout, syscalls, process memory, ELF loading).

---

### Phase 1 — Reverse Engineering Foundations

**Goal:** Read and understand compiled binaries (ELF), use a debugger, analyze malware-like samples.

**Prerequisites:**

#### Skill Tree (complete in order)

```
1. C Deep Dive
   ├── Pointers & pointer arithmetic
   ├── Memory layout (stack, heap, BSS, data, text)
   ├── Structs & padding
   ├── Function call conventions (cdecl, sysv amd64)
   └── Compiler optimizations & how they transform code

2. x86-64 Assembly
   ├── Registers (general purpose, segment, flags, RIP)
   ├── Instructions (mov, lea, jmp, call/ret, push/pop, cmp, test)
   ├── Stack operations and stack frames
   ├── Conditional jumps & loops in asm
   ├── Syscall convention (rax, rdi, rsi, rdx, r10, r8, r9)
   └── Position-independent code (PIC/PIE)

3. ELF Binary Format
   ├── ELF header (magic, class, entry point, section table)
   ├── Section headers (.text, .data, .bss, .rodata, .plt, .got)
   ├── Program headers & segment mapping
   ├── Relocations (REL, RELA)
   ├── Dynamic linking (PLT/GOT, lazy binding)
   └── Stripped vs unstripped binaries

4. Tools Mastery
   ├── readelf, objdump, nm, strings, xxd
   ├── ltrace / strace
   ├── gdb (breakpoints, registers, disassemble, examine memory)
   ├── radare2 / rizin (seek, analyze, visual mode)
   └── Ghidra (decompiler, data types, cross-references)

5. Static Analysis
   ├── Identifying main() and program logic
   ├── Reversing control flow (if/else, loops, switch)
   ├── Identifying library calls vs custom functions
   ├── String analysis and cross-references
   ├── Identifying encryption/hashing constants
   └── Annotating a binary in Ghidra

6. Dynamic Analysis
   ├── Setting breakpoints at function entries
   ├── Inspecting registers and stack during execution
   ├── Tracing syscalls with strace
   ├── Patching bytes in memory / binary
   ├── Debugging stripped binaries
   └── Basic anti-debugging tricks (ptrace, timing checks)

7. Practical Projects (capstone)
   ├── Reverse a simple crackme (find password)
   ├── Reverse a stripped ELF binary and reconstruct logic
   ├── Patch a binary to change its behavior
   └── Write a GDB script to automate analysis
```

**Estimated time:** 3–4 months (full-time)

---

### Phase 2 — Binary Exploitation

**Goal:** Exploit memory corruption vulnerabilities in compiled binaries (stack, heap, format strings).

**Prerequisites:**
- Phase 1 complete (RE foundations)
- Strong C understanding (undefined behavior, memory unsafety)
- Familiarity with Linux process memory layout
- Basic Python for exploit scripting (pwntools)

#### Skill Tree (complete in order)

```
1. Linux Security Mechanisms
   ├── ASLR (address space layout randomization)
   ├── NX / DEP (non-executable stack/heap)
   ├── Stack canaries
   ├── RELRO (full vs partial)
   ├── PIE (position-independent executable)
   ├── seccomp
   └── How to check protections (checksec, pwntools)

2. Stack-Based Overflows
   ├── Buffer overflows on stack
   ├── Overwriting saved RBP / RIP
   ├── Controlling RIP with offset calculation
   ├── Return-oriented programming (ROP) basics
   ├── ret2win / ret2system
   ├── Bypassing stack canaries (leak + overwrite)
   ├── Bypassing NX with ROP chains
   └── ret2libc / leaking libc addresses

3. Return-Oriented Programming
   ├── Finding gadgets (ROPgadget, ropper)
   ├── Gadget types (pop rdi; ret, pop rsi; ret, syscall; ret)
   ├── Building ROP chains manually
   ├── ret2csu / __libc_csu_init universal gadgets
   ├── Sigreturn-oriented programming (SROP)
   └── One-gadget (execve("/bin/sh") single addresses)

4. Format String Vulnerabilities
   ├── Reading stack with %x, %p, %s
   ├── Writing with %n
   ├── Leaking addresses (PIE, libc, stack)
   ├── Arbitrary write via format strings
   └── Combining format string leak + ROP

5. Heap Exploitation
   ├── Heap allocator internals (glibc malloc / free)
   ├── Chunk structure (prev_size, size, fd, bk)
   ├── Bins: fastbins, tcache, unsorted bin, small/large bins
   ├── Use-after-free (UAF)
   ├── Double free
   ├── Heap overflow
   ├── tcache poisoning
   ├── Fastbin attack / fastbin dup
   └── House of force / house of spirit (introduction)

6. Shellcoding
   ├── Writing execve("/bin/sh") shellcode in assembly
   ├── Null-byte-free shellcode
   ├── Stage 2 shellcode (read + jump)
   ├── Encoders / decoders (alpha-numeric shellcode)
   └── Testing shellcode with custom harness

7. Practical Projects (capstone)
   ├── Exploit a stack buffer overflow with ROP chain
   ├── Exploit a format string to leak + overwrite GOT
   ├── Exploit a heap UAF to get shell
   ├── Full-chain: format string leak + heap exploit
   └── Solve 10 protostar / pwn.college challenges
```

**Estimated time:** 4–6 months (full-time)

---

### Phase 3 — Web Pentesting

**Goal:** Identify and exploit common web vulnerabilities.

**Prerequisites:**
- Networking fundamentals (you have this)
- HTTP/HTTPS protocol understanding
- Basic web tech (HTML, JS, cookies, sessions)
- Python for scripting tools

#### Skill Tree (complete in order)

```
1. Web Fundamentals
   ├── HTTP request/response structure
   ├── Methods (GET, POST, PUT, DELETE, OPTIONS)
   ├── Headers (Host, Cookie, Origin, Referer, X-Forwarded-For)
   ├── Sessions, cookies, JWT tokens
   ├── Same-origin policy (SOP)
   ├── Cross-origin resource sharing (CORS)
   └── HTTPS / TLS handshake basics

2. Reconnaissance
   ├── Passive recon (whois, dns, shodan, google dorking)
   ├── Subdomain enumeration (sublist3r, amass)
   ├── Directory fuzzing (ffuf, dirb, gobuster)
   ├── Technology fingerprinting (wappalyzer, whatweb)
   └── Network scanning (nmap, masscan)

3. Server-Side Vulnerabilities
   ├── SQL injection (UNION, blind, time-based, out-of-band)
   ├── NoSQL injection
   ├── Command injection
   ├── Server-side request forgery (SSRF)
   ├── File inclusion (LFI/RFI)
   ├── File upload vulnerabilities
   ├── XXE (XML external entities)
   └── Insecure deserialization

4. Client-Side Vulnerabilities
   ├── Cross-site scripting (XSS — reflected, stored, DOM)
   ├── Cross-site request forgery (CSRF)
   ├── Clickjacking
   ├── Open redirect
   ├── WebSocket vulnerabilities
   └── CORS misconfiguration exploitation

5. Authentication & Authorization
   ├── Brute-force attacks
   ├── Credential stuffing
   ├── Session fixation
   ├── JWT attacks (none algorithm, weak secret, kid injection)
   ├── IDOR (insecure direct object references)
   ├── Privilege escalation (horizontal / vertical)
   └── OAuth / SSO misconfigurations

6. Infrastructure & Advanced
   ├── Subdomain takeover
   ├── Virtual host discovery
   ├── Race conditions
   ├── HTTP request smuggling
   ├── Web cache poisoning / deception
   ├── API pentesting (REST, GraphQL)
   └── Container escape basics (if Docker in scope)

7. Practical Projects (capstone)
   ├── Complete OWASP Juice Shop (all challenges)
   ├── Build a vulnerable web app + exploit it
   ├── Write an automated scanner for one vulnerability class
   └── Bug bounty: find one valid vulnerability on a program
```

**Estimated time:** ongoing, 6+ months for solid competency

---

## 4. Prerequisite Dependency Trees

```
Phase 0: Operating Systems (foundation — alongside Phase 1)
┌──────────────────────────────────────────────────────┐
│ Processes & Memory Layout                            │
│   │                                                  │
│   ▼                                                  │
│ Virtual Memory & Paging                              │
│   │                                                  │
│   ├─────────────────────────────────────────         │
│   │                    │                             │
│   ▼                    ▼                             │
│ System Calls    Memory Allocation                    │
│ Interface       Internals (malloc, sbrk, mmap)       │
│   │                    │                             │
│   └─────────┬──────────┘                             │
│             ▼                                        │
│ Synchronization & File Systems                       │
└──────────────────────────────────────────────────────┘
                              │
                              ▼
Phase 1: Reverse Engineering
┌──────────────────────────────────────────────────────┐
│ C Fundamentals (pointers, memory, structs)           │
│   │                                                  │
│   ▼                                                  │
│ x86-64 Assembly (registers, stack, syscalls)         │
│   │                                                  │
│   ▼                                                  │
│ ELF Format (headers, sections, relocations, GOT/PLT) │
│   │                                                  │
│   ▼                                                  │
│ Tools (gdb, radare2, Ghidra, readelf, objdump)       │
│   │                                                  │
│   ▼                                                  │
│ Static Analysis → Dynamic Analysis → Crackmes        │
└──────────────────────────────────────────────────────┘
                              │
                              ▼
Phase 2: Binary Exploitation
┌──────────────────────────────────────────────────────┐
│ Linux Security Mechanisms (ASLR, NX, canary, PIE)    │
│   │                                                  │
│   ▼                                                  │
│ Stack Overflows                                      │
│   │                                                  │
│   ├──────────────────► ROP Chains (bypass NX)        │
│   │                      │                           │
│   ▼                      ▼                           │
│ Format Strings ──────► Combine with ROP              │
│   │                                                  │
│   ▼                                                  │
│ Heap Exploitation (glibc malloc, tcache, fastbin)    │
│   │                                                  │
│   ▼                                                  │
│ Shellcoding                                          │
└──────────────────────────────────────────────────────┘
                              │
                              ▼
Phase 3: Web Pentesting
┌──────────────────────────────────────────────────────┐
│ HTTP / Web Fundamentals                              │
│   │                                                  │
│   ├──────────────────► Reconnaissance                │
│   │                      │                           │
│   ▼                      ▼                           │
│ Auth & Sessions ──────► Server-Side Attks (SQLi etc) │
│   │                      │                           │
│   ▼                      ▼                           │
│ Client-Side Attks ────► Infrastructure & Advanced    │
└──────────────────────────────────────────────────────┘
```

---

## 5. Free Resource Library

### 5.1 Reverse Engineering

| Resource | Type | Link |
|---|---|---|
| "Intro to x86-64 Assembly" (OpenSecurityTraining) | Course | https://opensecuritytraining.info/IntroX86.html |
| Intel x86-64 SDM (Vol 1 & 2) — reference | Manual | https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html |
| "Reverse Engineering for Beginners" (Dennis Yurichev) | Book | https://beginners.re/ |
| Nightmare (RE + pwn course: lots of binary analysis) | Course | https://github.com/guyinatuxedo/nightmare |
| "Practical Binary Analysis" exercises (Dennis Andriesse) | Book (free course site exists) | https://practicalbinaryanalysis.com/ |
| radare2 / rizin book | Official guide | https://book.rada.re/ |
| "Reverse Engineering 101" (0x00pf) | Articles | https://0x00pf.github.io/ |
| GDB documentation | Reference | https://sourceware.org/gdb/documentation/ |
| Ghidra Cheatsheet | Reference | https://ghidra.re/online-courses/ |
| crackmes.one | Practice | https://crackmes.one/ |
| ELF spec (official) | Spec | https://refspecs.linuxfoundation.org/elf/elf.pdf |
| "Learning Linux Binary Analysis" (Ryan O'Neill) | Book (free sample chapters) | https://leanpub.com/linuxbinaryanalysis/ |
| OpenSecurityTraining2 — "Reverse Engineering 401" | Course | https://p.ost2.fyi/courses/ |
| Linux ELF Howto (Brian Raiter) | Article | https://www.muppetlabs.com/~breadbox/software/tiny/teensy.html |

### 5.2 Binary Exploitation

| Resource | Type | Link |
|---|---|---|
| pwn.college (by Arizona State, Zardus & Yan) | Course | https://pwn.college/ |
| "Intro to Exploitation" (Nightmare — same as above) | Course | https://github.com/guyinatuxedo/nightmare |
| RPISEC Modern Binary Exploitation | Course | https://github.com/RPISEC/MBE |
| Shellcode (Smashing the Stack / Aleph One) | Paper | https://www.shellcode.net/ |
| "Beginners Guide to Exploitation" (Sploitfun) | Tutorial | https://sploitfun.wordpress.com/ |
| "Shellcoding in Linux" tutorial | Article | https://www.vividmachines.com/shellcode/shellcode.html |
| "Introduction to Return Oriented Programming" | Article | https://codearcana.com/posts/2013/05/28/introduction-to-return-oriented-programming-exploitation.html |
| LiveOverflow Binary Exploitation (YouTube) | Video | https://www.youtube.com/playlist?list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN |
| Heap exploitation how2heap | Repo | https://github.com/shellphish/how2heap |
| CTF pwn challenges (picoCTF, pwnable.kr, pwnable.tw) | Practice | https://picoctf.org/ , https://pwnable.kr/ , https://pwnable.tw/ |
| protostar (classic exploitation challenges) | Practice | https://exploit.education/protostar/ |
| ROP Emporium | Practice | https://ropemporium.com/ |
| Angry Fuzzer / AFL++ (fuzzing) | Tool | https://aflplus.plus/ |
| pwntools documentation | Tool | https://docs.pwntools.com/ |
| "Shellcoder's Handbook" — free PDF searchable | Book | https://www.wiley.com/en-us/The+Shellcoder%27s+Handbook%3A+Discovering+and+Exploiting+Security+Holes%2C+2nd+Edition-p-9780470080238 |
| Linux kernel exploitation (after userland mastery) | Course | https://pawnyable.cafe/ |

### 5.3 Web Pentesting

| Resource                                    | Type      | Link                                                                    |
| ------------------------------------------- | --------- | ----------------------------------------------------------------------- |
| OWASP Top 10 (official)                     | Reference | https://owasp.org/www-project-top-ten/                                  |
| OWASP Web Security Testing Guide            | Guide     | https://owasp.org/www-project-web-security-testing-guide/               |
| PortSwigger Web Security Academy            | Course    | https://portswigger.net/web-security                                    |
| OWASP Juice Shop (vulnerable app)           | Practice  | https://owasp.org/www-project-juice-shop/                               |
| PentesterLab (free exercises)               | Practice  | https://pentesterlab.com/exercises                                      |
| Web Hacking 101 (Peter Yaworski) — free PDF | Book      | https://pwning.owasp.org/                                               |
| Bug Bounty Bootcamp (Vickie Li)             | Book      | https://nostarch.com/bugbountybootcamp                                  |
| Hacker101 (HackerOne)                       | Course    | https://www.hacker101.com/                                              |
| HackTheBox Academy (free tier)              | Course    | https://academy.hackthebox.com/                                         |
| TryHackMe (free rooms)                      | Practice  | https://tryhackme.com/                                                  |
| Google XSS Game                             | Practice  | https://xss-game.appspot.com/                                           |
| WebGoat (OWASP vulnerable app)              | Practice  | https://github.com/WebGoat/WebGoat                                      |
| DVWA (Damn Vulnerable Web App)              | Practice  | https://github.com/digininja/DVWA                                       |
| SQL Injection Wiki                          | Reference | https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/ |
| SANS Web App Posters                        | Reference | https://www.sans.org/posters/                                           |

### 5.4 General / Linux / Tools

| Resource                                                | Type      | Link                                      |
| ------------------------------------------------------- | --------- | ----------------------------------------- |
| man pages                                               | Reference | man <topic>                               |
| The Linux Programming Interface (Michael Kerrisk)       | Book      | https://man7.org/tlpi/                    |
| "Computer Systems: A Programmer's Perspective" (CS:APP) | Book      | https://csapp.cs.cmu.edu/                 |
| Arch Wiki                                               | Reference | https://wiki.archlinux.org/               |
| nand2tetris (build a computer)                          | Course    | https://www.nand2tetris.org/              |
| Befo's "Cybersecurity 101"                              | Guide     | https://github.com/befo/cybersecurity-101 |

### 5.5 Operating Systems

| Resource                                                                       | Type          | Link                                                                     |
| ------------------------------------------------------------------------------ | ------------- | ------------------------------------------------------------------------ |
| Operating Systems: Three Easy Pieces (OSTEP)                                   | Book          | https://pages.cs.wisc.edu/~remzi/OSTEP/                                  |
| "Computer Systems: A Programmer's Perspective" (CS:APP) — Ch. 8-9, 12          | Book          | https://csapp.cs.cmu.edu/                                                |
| xv6: A simple, Unix-like teaching operating system                             | Source + Book | https://pdos.csail.mit.edu/6.828/xv6/                                    |
| xv6 annotated source (xv6-riscv-book)                                          | Book          | https://github.com/mit-pdos/xv6-riscv-book                               |
| The Linux Programming Interface (TLPI)                                         | Book          | https://man7.org/tlpi/                                                   |
| Linux Kernel docs — process, memory, syscalls                                  | Reference     | https://www.kernel.org/doc/html/latest/                                  |
| "Understanding the Linux Kernel" (Bovet & Cesati)                              | Book          | https://www.oreilly.com/library/view/understanding-the-linux/0596005652/ |
| "Linux Kernel Development" (Robert Love) — free chapters                       | Book          | https://www.informit.com/store/linux-kernel-development-9780672329463    |
| OSDev Wiki — write your own OS                                                 | Wiki          | https://wiki.osdev.org/                                                  |
| PintOS (Stanford educational OS)                                               | Course        | https://pintos.org/                                                      |
| MIT 6.S081 — Operating System Engineering (lectures + labs)                    | Course        | https://pdos.csail.mit.edu/6.S081/2020/                                  |
| "The Little Book of Semaphores" (Allen B. Downey)                              | Book          | https://greenteapress.com/wp/semaphores/                                 |
| Linux man pages — section 2 (syscalls), section 3 (libc), section 7 (concepts) | Reference     | man 2 intro, man 3 intro, man 7 intro                                    |
| "How does a malloc work?" (many resources)                                     | Articles      | https://sourceware.org/glibc/wiki/MallocInternals                        |

---

## 6. Project Ideas (by phase)

### Phase 0 Projects — Operating Systems

| # | Project | Skills |
|---|---|---|
| 1 | Write a simple memory allocator (malloc/free) in C | Virtual memory, sbrk, mmap |
| 2 | Build a minimal shell that supports pipes and redirection | Process creation, file descriptors |
| 3 | Write a system-call tracer (mini-strace) in C | Syscall interface, ptrace |
| 4 | Implement a simple ELF loader that maps and runs a binary | ELF format, mmap, process execution |
| 5 | Write a multi-threaded producer-consumer in C | Synchronization, mutexes, semaphores |
| 6 | Implement a simple file system (in memory or on disk) | File systems, block I/O, inodes |
| 7 | Write a virtual memory simulator (page table, TLB) | Paging, page replacement algorithms |

### Phase 1 Projects

| # | Project | Skills |
|---|---|---|
| 1 | Write an ELF parser in Python that reads headers + sections | ELF format, structs, file I/O |
| 2 | Write a minimal GDB script that prints stack frames | GDB scripting |
| 3 | Reverse 10 crackmes from crackmes.one (easy → medium) | Static/dynamic analysis |
| 4 | Patch a binary to skip license check | Binary patching |
| 5 | Write a disassembler in Python (for a subset of x86-64) | Assembly, binary parsing |
| 6 | Analyze a real stripped ELF malware sample (from malware zoo) | Full RE workflow |

### Phase 2 Projects

| # | Project | Skills |
|---|---|---|
| 1 | Exploit a simple stack overflow (ret2win) | Buffer overflow basics |
| 2 | Exploit a NX binary with ROP chain | ROP gadgets, pwntools |
| 3 | Exploit format string to leak libc + GOT overwrite | Format strings |
| 4 | Exploit a heap use-after-free for code execution | Heap internals |
| 5 | Write an execve("/bin/sh") null-byte-free shellcode | Assembly, syscalls |
| 6 | Write a custom ROP gadget finder | Binary parsing, automation |
| 7 | Complete 10 challenges from pwnable.kr / pwnable.tw | CTF exploitation |

### Phase 3 Projects

| # | Project | Skills |
|---|---|---|
| 1 | Complete PortSwigger Academy (all labs) | Web fundamentals |
| 2 | Complete OWASP Juice Shop (all challenges) | Full web pentesting |
| 3 | Deploy DVWA or WebGoat and exploit all categories | Tool setup + practice |
| 4 | Write an automated SQLi scanner in Python | Automation, SQL |
| 5 | Build a deliberately vulnerable web app (Flask) | Web dev + vuln understanding |
| 6 | Find + report 1 valid vulnerability on a bug bounty program | Real-world recon + exploitation |

---

## 7. Weekly Routine Template

You have full-time availability. A suggested weekly structure:

```
Saturday–Wednsday:
  Morning (3h)  → OS study + Deep work: Phase 1/2/3 current skill (reading + labs + projects)
  Afternoon (2h) → CTF challenge or practical exercise
  Evening (1h)   → Review notes, update BRAIN-MAP, research tomorrow's topic

Thursday:
  Practical day: longer project work (OS projects or Phase 1/2/3)

Friday:
  Rest / light reading (security news, blog posts)

Weekly habits:
  - Every day: 30min minimum hands-on (no excuses)
  - Every week: solve at least one challenge on a CTF platform
  - Every month: build one small project from the project list
```

Adjust as needed. The key is **consistency over intensity**.

---

## 8. Progress Tracker

Check boxes as you complete. Revisit and update monthly.

### 8.0 Operating Systems Track

```
Phase 0: Operating Systems (alongside Phase 1)

[ ] Processes — creation, states, context switching, PCB
[ ] Memory layout — stack, heap, BSS, data, text
[ ] Virtual memory — paging, page tables, TLB, demand paging
[ ] Virtual memory — address translation, MMU
[ ] System calls — interface, wrapper functions, context switch
[ ] Memory allocation — sbrk, mmap, malloc internals
[ ] File systems — VFS, inodes, ext4 basics
[ ] Synchronization — mutexes, semaphores, condition variables
[ ] Inter-process communication — pipes, signals, shared memory
[ ] Protection rings — ring 0 vs ring 3, syscall gates
[ ] Security mechanisms — ASLR, NX, stack canary (kernel side)
[ ] Project: Write a memory allocator in C
[ ] Project: Build a minimal shell with pipes/redirection
[ ] Project: Write a mini-strace in C
[ ] Project: Implement a simple ELF loader
[ ] Project: Virtual memory simulator

BEGINNER [ ]  APPRENTICE [ ]  JOURNEYMAN [ ]  MASTER [ ]
```

### 8.1 Reverse Engineering Track

```
Phase 1: Reverse Engineering

[ ] C Deep Dive — Pointers & memory layout
[ ] C Deep Dive — Structs, calling conventions, optimizations
[ ] x86-64 Assembly — Registers, instructions, stack
[ ] x86-64 Assembly — Syscalls, conditional jumps, PIC
[ ] ELF Format — Headers, sections, segments
[ ] ELF Format — Relocations, dynamic linking, GOT/PLT
[ ] Tools — readelf, objdump, nm, strings, xxd, strace
[ ] Tools — GDB (breakpoints, registers, memory examination)
[ ] Tools — radare2 / rizin (seek, analyze, disassemble)
[ ] Tools — Ghidra (decompiler, data types, cross-refs)
[ ] Static Analysis — Simple binary annotation
[ ] Dynamic Analysis — Debugging + tracing
[ ] Anti-debugging basics
[ ] Project: Write ELF parser in Python
[ ] Project: Reverse 10 crackmes
[ ] Project: Patch a binary
[ ] Project: Analyze a real stripped malware sample

BEGINNER [ ]  APPRENTICE [ ]  JOURNEYMAN [ ]  MASTER [ ]
```

### 8.2 Binary Exploitation Track

```
Phase 2: Binary Exploitation

[ ] Security mechanisms — ASLR, NX, canary, RELRO, PIE
[ ] Stack overflow basics — Offset calculation, control RIP
[ ] ret2win / ret2system
[ ] Bypassing stack canaries
[ ] ROP — Finding gadgets
[ ] ROP — Building chains
[ ] ret2csu / __libc_csu_init
[ ] SROP
[ ] One-gadget
[ ] Format string — Reading stack
[ ] Format string — Writing with %n
[ ] Format string — Leak + arbitrary write
[ ] Heap — Chunk structure, bins, tcache
[ ] Use-after-free
[ ] Double free
[ ] tcache poisoning
[ ] Fastbin attacks
[ ] Shellcoding — execve("/bin/sh")
[ ] Shellcoding — Null-byte-free
[ ] Shellcoding — Encoders
[ ] Project: Stack overflow + ROP chain
[ ] Project: Format string leak + GOT overwrite
[ ] Project: Heap UAF exploit
[ ] Project: 10 pwnable.kr challenges

BEGINNER [ ]  APPRENTICE [ ]  JOURNEYMAN [ ]  MASTER [ ]
```

### 8.3 Web Pentesting Track

```
Phase 3: Web Pentesting

[ ] HTTP fundamentals
[ ] Sessions, cookies, JWT
[ ] SOP / CORS
[ ] Reconnaissance — passive + active
[ ] Subdomain enumeration
[ ] Directory fuzzing
[ ] SQL injection — UNION, blind, time-based
[ ] Command injection
[ ] SSRF
[ ] LFI / RFI
[ ] File upload exploitation
[ ] XXE
[ ] Insecure deserialization
[ ] XSS — reflected, stored, DOM
[ ] CSRF
[ ] Clickjacking
[ ] JWT attacks
[ ] IDOR
[ ] Privilege escalation
[ ] Race conditions
[ ] HTTP request smuggling
[ ] API pentesting
[ ] Project: Complete PortSwigger Academy
[ ] Project: Complete OWASP Juice Shop
[ ] Project: Build vulnerable app + exploit
[ ] Project: Bug bounty valid finding

BEGINNER [ ]  APPRENTICE [ ]  JOURNEYMAN [ ]  MASTER [ ]
```

---

## 9. Changelog

| Date | Entry |
|---|---|
| 2026-06-21 | Initial brain map created. Baseline established. Starting RE Phase. |
| 2026-06-21 | Added Phase 0 (Operating Systems) alongside Phase 1. Added OS resources, projects, progress tracker, prerequisites, and dependency tree. BRAIN-MAP moved to para/. |

---

> **"We are what we repeatedly do. Excellence, then, is not an act, but a habit."** — Aristotle
>
> Start Phase 1 today. Open a terminal, write an ELF parser, reverse a crackme. The map is only useful if you walk it.
