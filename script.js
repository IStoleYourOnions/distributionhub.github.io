const distributions = [
    { name: "Ubuntu", version: "24.04.1 LTS x86_64", icon: "img/distro/ubuntu.png", downloadLink: "https://releases.ubuntu.com/noble/ubuntu-24.04.1-desktop-amd64.iso", description: "User-friendly and popular Linux distribution.", websiteLink: "https://ubuntu.com/", category: "beginner", torrent: "https://releases.ubuntu.com/24.04/ubuntu-24.04.1-desktop-amd64.iso.torrent"},
    { name: "Fedora", version: "Workstation 41 x86_64", icon: "img/distro/fedora.svg", downloadLink: "https://download.fedoraproject.org/pub/fedora/linux/releases/41/Workstation/x86_64/iso/Fedora-Workstation-Live-x86_64-41-1.4.iso", description: "Cutting-edge distribution with latest technology.", websiteLink: "https://fedoraproject.org/", category: "beginner", torrent: "https://torrent.fedoraproject.org/torrents/Fedora-Workstation-Live-x86_64-41.torrent"},
    { name: "Debian", version: "12.9 x86_64", icon: "img/distro/debian.svg", downloadLink: "https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-12.9.0-amd64-netinst.iso", description: "Known for its stability and security.", websiteLink: "https://www.debian.org/", category: "advanced", torrent: "https://cdimage.debian.org/debian-cd/current/amd64/bt-cd/debian-12.9.0-amd64-netinst.iso.torrent"},
    { name: "Arch Linux", version: "2025.02.01 x86_64", icon: "img/distro/arch.svg", downloadLink: "https://mirrors.dotsrc.org/archlinux/iso/2025.02.01/archlinux-2025.02.01-x86_64.iso", description: "Minimalist and highly customizable distribution.", websiteLink: "https://archlinux.org/", category: "advanced", torrent: "https://archlinux.org/releng/releases/2025.02.01/torrent/"},
    { name: "Linux Mint", version: "22.1 x86_64", icon: "img/distro/mint.svg", downloadLink: "https://ftp.rz.uni-frankfurt.de/pub/mirrors/linux-mint/iso/stable/22.1/linuxmint-22.1-cinnamon-64bit.iso", description: "Ubuntu-based, user-friendly distribution.", websiteLink: "https://linuxmint.com/", category: "beginner", videoLink: "https://www.youtube.com/watch?v=xaQdfqpJmyc", torrent: "https://linuxmint.com/torrents/linuxmint-22.1-cinnamon-64bit.iso.torrent"},
    { name: "Manjaro", version: "24.2.0 x86_64", icon: "img/distro/manjaro.svg", downloadLink: "https://download.manjaro.org/kde/24.2.0/manjaro-kde-24.2.0-241209-linux612.iso", description: "User-friendly Arch Linux-based distribution.", websiteLink: "https://manjaro.org/", category: "advanced"},
    { name: "EndeavourOS", version: "2024.06.25 x86_64", icon: "img/distro/eos.png", downloadLink: "https://mirror.alpix.eu/endeavouros/iso/EndeavourOS_Endeavour-2024.06.25.iso", description: "Flexible, user-friendly Arch-based distribution.", websiteLink: "https://endeavouros.com/", category: "advanced"},
    { name: "Pop!_OS", version: "22.04 LTS x86_64", icon: "img/distro/pop.png", downloadLink: "https://iso.pop-os.org/22.04/amd64/intel/43/pop-os_22.04_amd64_intel_43.iso", description: "Powerful Linux for productivity and gaming.", websiteLink: "https://pop.system76.com/", category: "beginner", videoLink: "https://www.youtube.com/watch?v=nLY-FqF7mW0"},
    { name: "Zorin OS", version: "17.2 Core x86_64", icon: "img/distro/zorin.svg", downloadLink: "https://zorin.mirrors.itworxx.de/17/Zorin-OS-17.2-Core-64-bit.iso", description: "Easy transition from Windows to Linux.", websiteLink: "https://zorin.com/os/", category: "beginner", videoLink: "https://www.youtube.com/watch?v=SLZJr1PHvmU"},
    { name: "Rocky Linux", version: "9.5 x86_64", icon: "img/distro/rocky.svg", downloadLink: "https://download.rockylinux.org/pub/rocky/9/isos/x86_64/Rocky-9.5-x86_64-dvd.iso", description: "RHEL-compatible Linux distribution.", websiteLink: "https://rockylinux.org/", category: "advanced", torrent: "https://download.rockylinux.org/pub/rocky/9/isos/x86_64/Rocky-9.5-x86_64-dvd.torrent"},  
    { name: "openSUSE Leap", version: "15.6 x86_64", icon: "img/distro/leap.png", downloadLink: "https://download.opensuse.org/distribution/leap/15.6/iso/openSUSE-Leap-15.6-NET-x86_64-Media.iso", description: "Versatile Linux with robust community support.", websiteLink: "https://www.opensuse.org/", category: "advanced"},
    { name: "openSUSE Tumbleweed", version: "Latest x86_64", icon: "img/distro/tumbleweed.png", downloadLink: "https://download.opensuse.org/tumbleweed/iso/openSUSE-Tumbleweed-NET-x86_64-Current.iso", description: "Versatile Linux with robust community support.", websiteLink: "https://www.opensuse.org/", category: "advanced"},
    { name: "Elementary OS", version: "7.1 x86_64", icon: "img/distro/elementary.png", downloadLink: "https://sgp1.dl.elementary.io/download/MTcyNDMyNDU1Ng==/elementaryos-7.1-stable.20230926rc.iso", description: "Beautiful and user-friendly, macOS-like interface.", websiteLink: "https://elementary.io/", category: "beginner"},
    { name: "Garuda Linux", version: "240428 x86_64", icon: "img/distro/garuda.svg", downloadLink: "https://iso.builds.garudalinux.org/iso/latest/garuda/gnome/latest.iso", description: "High-performance Arch-based distribution.", websiteLink: "https://garudalinux.org/", category: "advanced", torrent: "https://iso.builds.garudalinux.org/iso/latest/garuda/gnome/latest.iso.torrent"},
    { name: "Kali Linux", version: "2024.4 x86_64", icon: "img/distro/kali.svg", downloadLink: "https://cdimage.kali.org/kali-2024.4/kali-linux-2024.4-installer-amd64.iso", description: "Powerful toolkit for ethical hacking and security.", websiteLink: "https://www.kali.org/", category: "advanced", torrent: "https://cdimage.kali.org/kali-2024.4/kali-linux-2024.4-installer-amd64.iso.torrent"},
    { name: "Pardus", version: "23.2 x86_64", icon: "img/distro/pardus.png", downloadLink: "https://indir.pardus.org.tr/ISO/Pardus23/Pardus-23.2-GNOME-amd64.iso", description: "Turkish-based, user-friendly Linux distribution.", websiteLink: "https://pardus.org.tr/", category: "lightweight"},
    { name: "CachyOS", version: "241221 x86_64", icon: "img/distro/cachy.svg", downloadLink: "https://cdn77.cachyos.org/ISO/desktop/241221/cachyos-desktop-linux-241221.iso", description: "Arch-based, optimized distribution for security.", websiteLink: "https://cachyos.org/", category: "advanced"},
    { name: "Kubuntu", version: "24.04 LTS x86_64", icon: "img/distro/kubuntu.svg", downloadLink: "https://cdimage.ubuntu.com/kubuntu/releases/24.04/release/kubuntu-24.04.1-desktop-amd64.iso", description: "Ubuntu with KDE Plasma desktop environment.", websiteLink: "https://kubuntu.org/", category: "beginner"},
    { name: "KDE Neon", version: "20250202 x86_64", icon: "img/distro/neon.svg", downloadLink: "https://files.kde.org/neon/images/user/20250202-0745/neon-user-20250202-0745.iso", description: "Latest KDE software on Ubuntu base.", websiteLink: "https://neon.kde.org/", category: "advanced", videoLink: "https://www.youtube.com/watch?v=VylznS4qjfQ", torrent: "https://files.kde.org/neon/images/user/20250202-0745/neon-user-20250202-0745.iso.torrent"},
    { name: "Slackware", version: "15.0 x86_64", icon: "img/distro/slackware.png", downloadLink: "https://mirrors.slackware.com/slackware/slackware-iso/slackware64-15.0-iso/slackware64-15.0-install-dvd.iso", description: "One of the oldest Linux distribution.", websiteLink: "http://www.slackware.com/", category: "advanced"},
    { name: "Puppy Linux", version: "10.0.7 x86_64", icon: "img/distro/puppy.png", downloadLink: "https://rockedge.org/kernels/data/ISO/Bookworm_Pup64/BookwormPup64_10.0.7.iso", description: "Lightweight and highly portable Linux distribution.", websiteLink: "https://puppylinux-woof-ce.github.io/", category: "lightweight"},
    { name: "NixOS", version: "24.05 x86_64", icon: "img/distro/nix.png", downloadLink: "https://channels.nixos.org/nixos-24.05/latest-nixos-gnome-x86_64-linux.iso", description: "Configurable Linux distribution.", websiteLink: "https://nixos.org/", category: "advanced"},
    { name: "Qubes OS", version: "4.2.2 x86_64", icon: "img/distro/qubes.svg", downloadLink: "https://mirrors.edge.kernel.org/qubes/iso/Qubes-R4.2.2-x86_64.iso", description: "Security through isolation using Xen virtualization.", websiteLink: "https://www.qubes-os.org/", category: "advanced"},
    { name: "Vanilla OS", version: "2.0 x86_64", icon: "img/distro/vanilla.svg", downloadLink: "https://download.vanillaos.org/latest.zip", description: "Minimalist Linux with a focus on simplicity.", websiteLink: "https://vanillaos.org/", category: "beginner"},
    { name: "Alpine Linux", version: "3.21.0 Standart x86_64", icon: "img/distro/alpine.png", downloadLink: "https://dl-cdn.alpinelinux.org/alpine/v3.21/releases/x86_64/alpine-standard-3.21.0-x86_64.iso", description: "Lightweight & security-oriented Linux distribution.", websiteLink: "https://alpinelinux.org/", category: "lightweight"},
    { name: "Oracle Linux", version: "9.5 x86_64", icon: "img/distro/oracle.png", downloadLink: "https://yum.oracle.com/ISOS/OracleLinux/OL9/u5/x86_64/OracleLinux-R9-U5-x86_64-dvd.iso", description: "Enterprise Linux optimized for Oracle.", websiteLink: "https://www.oracle.com/linux/", category: "advanced"},
    { name: "SDesk", version: "2024.09.16 x86_64", icon: "img/distro/sdesk.png", downloadLink: "https://stevestudios.net/wp-content/uploads/2024/09/sdesk-2024.09.16-x86_64.iso", description: "A minimalist distribution.", websiteLink: "https://stevestudios.net/", category: "beginner"},
    { name: "Solus", version: "4.6 x86_64", icon: "img/distro/solus.png", downloadLink: "https://downloads.getsol.us/isos/2024-10-14/Solus-Budgie-Release-2024-10-14.iso", description: "A distribution that includes the Budgie desktop.", websiteLink: "https://getsol.us/", category: "beginner"},
    { name: "Pisi Linux", version: "2.4 x86_64", icon: "img/distro/pisi.png", downloadLink: "https://ftp.linux.org.tr/pisilinux/iso/kde/Pisi-Linux-2.4-KDE6-x86_64.iso", description: "A Turkish distro with its own package manager.", websiteLink: "https://pisilinux.org/", category: "lightweight"},
    { name: "deepin", version: "25 Preview x86_64", icon: "img/distro/deepin.svg", downloadLink: "https://cdimage.deepin.com/releases/25-preview/amd64/deepin-desktop-community-25-preview-amd64.iso", description: "A modern OS with a macOS-like deepin desktop.", websiteLink: "https://www.deepin.org/", category: "beginner"},
    { name: "Tails", version: "6.12 x86_64", icon: "img/distro/tails.svg", downloadLink: "https://download.tails.net/tails/stable/tails-amd64-6.12/tails-amd64-6.12.img", description: "A Debian-based distribution focused on privacy.", websiteLink: "https://tails.net/", category: "advanced", torrent: "https://tails.net/torrents/files/tails-amd64-6.12.iso.torrent"},
    { name: "RebornOS", version: "2024.07.27 x86_64", icon: "img/distro/reborn.svg", downloadLink: "https://cdn.soulharsh007.dev/RebornOS-ISO/rebornos_iso-2024.07.27-x86_64.iso", description: "A Arch-based distro. with customizable desktops.", websiteLink: "https://rebornos.org/", category: "advanced"},
    { name: "Peppermint OS", version: "Deb x86_64", icon: "img/distro/peppermint.svg", downloadLink: "https://mirror.ossplanet.net/peppermint/iso/XFCE/PeppermintOS-Debian-64.iso", description: "A lightweight, cloud-focused Linux distribution.", websiteLink: "https://peppermintos.com/", category: "lightweight"},
    { name: "Raspberry Pi OS", version: "2024-10-22 ARM64", icon: "img/distro/raspberry.svg", downloadLink: "https://downloads.raspberrypi.com/raspios_arm64/images/raspios_arm64-2024-10-28/2024-10-22-raspios-bookworm-arm64.img.xz", description: "An OS optimized for Raspberry Pi devices.", websiteLink: "https://www.raspberrypi.com/software/operating-systems/", category: "lightweight"},
    { name: "BunsenLabs", version: "240123 x86_64", icon: "img/distro/bunsenlabs.png", downloadLink: "https://ddl.bunsenlabs.org/ddl/boron-1-240123-amd64.hybrid.iso", description: "Lightweight, customizable, and minimalist Linux.", websiteLink: "https://www.bunsenlabs.org/", category: "lightweight"},
    { name: "Athena OS", version: "v23.11 x86_64", icon: "img/distro/athena.png", downloadLink: "https://github.com/Athena-OS/athena/releases/download/v23.11/athena-rolling-x86_64.iso", description: "Cybersecurity-focused, secure, and modern OS.", websiteLink: "https://athenaos.org/", category: "advanced"},
    { name: "PCLinuxOS", version: "2024.10 x86_64", icon: "img/distro/pclinuxos.svg", downloadLink: "https://ftp.nluug.nl/os/Linux/distr/pclinuxos/pclinuxos/iso/pclinuxos64-kde-2024.10.iso", description: "User-friendly and versatile Linux distribution.", websiteLink: "https://www.pclinuxos.com/", category: "advanced"},
    { name: "SteamFork", version: "20250204 x86_64", icon: "img/distro/steamfork.png", downloadLink: "https://www.steamfork.org/images/installer/steamfork-rel-latest-x86_64.iso", description: "SteamOS-based operating system.", websiteLink: "https://github.com/SteamFork", category: "beginner"},
    { name: "Aurora", version: "Stable x86_64", icon: "img/distro/aurora.svg", downloadLink: "https://dl.getaurora.dev/aurora-stable.iso", description: "Immutable Linux distribution.", websiteLink: "https://getaurora.dev/en", category: "advanced"},
    { name: "AlmaLinux", version: "9.5 x86_64", icon: "img/distro/alma.svg", downloadLink: "https://repo.almalinux.org/almalinux/9.5/isos/x86_64/AlmaLinux-9-latest-x86_64-dvd.iso", description: "Non-profit distro compatible with RHEL.", websiteLink: "https://almalinux.org/", category: "advanced", torrent: "https://repo.almalinux.org/almalinux/9.5/isos/x86_64/AlmaLinux-9.5-x86_64.torrent"},
    { name: "Void Linux", version: "2025.02.02 x86_64", icon: "img/distro/void.png", downloadLink: "https://repo-default.voidlinux.org/live/current/void-live-x86_64-20250202-xfce.iso", description: "A lightweight, rolling-release distro with runit.", websiteLink: "https://voidlinux.org/", category: "advanced"},
    { name: "Gentoo Linux", version: "2025.02.02 amd64", icon: "img/distro/gentoo.png", downloadLink: "https://distfiles.gentoo.org/releases/amd64/autobuilds/20250202T154819Z/livegui-amd64-20250202T154819Z.iso", description: "A flexible, source-based rolling-release distro.", websiteLink: "https://www.gentoo.org/", category: "advanced"},
    { name: "Calculate Linux", version: "2025.02.09 x86_64", icon: "img/distro/calculate.png", downloadLink: "https://mirror.calculate-linux.org/release/20250209/cld-20250209-x86_64.iso", description: "A preconfigured, Gentoo-based distro.", websiteLink: "https://www.calculate-linux.org/", category: "advanced"},
    { name: "Artix", version: "2024.08.23 x86_64", icon: "img/distro/artix.svg", downloadLink: "https://iso.artixlinux.org/iso/artix-xfce-openrc-20240823-x86_64.iso", description: "A systemd-free, rolling-release Arch-based distro.", websiteLink: "https://artixlinux.org/", category: "advanced", torrent: "https://torrents.artixlinux.org/artix-xfce-openrc-20240823-x86_64.iso.torrent"},
    { name: "Chimera Linux", version: "2024.12.04 x86_64", icon: "img/distro/chimera.png", downloadLink: "https://repo.chimera-linux.org/live/latest/chimera-linux-x86_64-LIVE-20241204-gnome.iso", description: "A modern, general-purpose Linux distribution.", websiteLink: "https://chimera-linux.org/", category: "advanced"},
    { name: "OpenMandriva Lx ROME", version: "2025.01.18 x86_64", icon: "img/distro/openmandriva.png", downloadLink: "https://file-store.openmandriva.org/api/v1/file_stores/2765eed82445ea0121431b5469fddb32e4b3fd7b", description: "A user-friendly, rolling-release RPM-based distro.", websiteLink: "https://www.openmandriva.org/", category: "advanced"},
    { name: "Tuxedo OS", version: "4 x86_64", icon: "img/distro/tuxedo.png", downloadLink: "https://os.tuxedocomputers.com/TUXEDO-OS_current.iso", description: "A Linux distro optimized for Tuxedo Computers.", websiteLink: "https://www.tuxedocomputers.com/en/TUXEDO-OS_1.tuxedo", category: "beginner", torrent: "https://os.tuxedocomputers.com/TUXEDO-OS-202501151546.iso.torrent"},
    { name: "Serpent OS", version: "0.24.6 (alpha) x86_64", icon: "img/distro/serpentos.png", downloadLink: "https://download.serpentos.com/serpent-os-0.24.6-gnome.iso", description: "A modern, powerful, and open-source OS.", websiteLink: "https://serpentos.com/", category: "advanced"},
    { name: "AV Linux", version: "23.5 x86_64", icon: "img/distro/avlinux.png", downloadLink: "https://downloads.bandshed.net/AVL-MXe-23.5-GH/AVL_MXE_BASE-23.5_x64.iso", description: "A distro optimized for audio and video production.", websiteLink: "https://www.bandshed.net/avlinux/", category: "beginner"},
    { name: "Nobara", version: "41 x86_64", icon: "img/distro/nobara.png", downloadLink: "https://nobara-images.nobaraproject.org/Nobara-41-Official-2025-01-05.iso", description: "A distro optimized for gaming and performance.", websiteLink: "https://nobaraproject.org/", category: "beginner"},
    { name: "Clear Linux", version: "42950 x86_64", icon: "img/distro/clearlinux.svg", downloadLink: "https://cdn.download.clearlinux.org/releases/42950/clear/clear-42950-live-desktop.iso", description: "An Intel-optimized performance-focused distro.", websiteLink: "https://www.clearlinux.org/", category: "advanced"},
    { name: "BigLinux", version: "2025.02.01 x86_64", icon: "img/distro/biglinux.png", downloadLink: "https://iso.biglinux.com.br/biglinux_2025-02-01_k66.iso", description: "A user-friendly, performance-focused distro.", websiteLink: "https://www.biglinux.com.br/", category: "beginner", torrent: "https://iso.biglinux.com.br/biglinux_2025-02-01_k66.iso.torrent"},
    { name: "Regata OS", version: "24.1 x86_64", icon: "img/distro/regata.png", downloadLink: "https://sourceforge.net/projects/regataos/files/regataos-24.1/Regata_OS_24.1_en-US.x86_64-24.1.0.iso/download", description: "A gaming-focused, user-friendly Linux distro.", websiteLink: "https://get.regataos.com.br/", category: "beginner"},
    { name: "Archcraft", version: "2025.01.03 x86_64", icon: "img/distro/archcraft.png", downloadLink: "https://sourceforge.net/projects/archcraft/files/latest/download", description: "Yet another minimal Linux distribution.", websiteLink: "https://archcraft.io/", category: "advanced"},
    { name: "Devuan", version: "5.0.0 x86_64", icon: "img/distro/devuan.png", downloadLink: "https://ftp.fau.de/devuan-cd/devuan_daedalus/desktop-live/devuan_daedalus_5.0.0_amd64_desktop-live.iso", description: "A Debian-based distro without systemd.", websiteLink: "https://www.devuan.org/", category: "advanced"},
    { name: "MX Linux", version: "23.5 x86_64", icon: "img/distro/mxlinux.png", downloadLink: "https://sourceforge.net/projects/mx-linux/files/Final/Xfce/MX-23.5_x64.iso/download", description: "A Debian-based and user-friendly distro.", websiteLink: "https://mxlinux.org/", category: "beginner"},
    { name: "antiX", version: "23.2 x86_64", icon: "img/distro/antiX.png", downloadLink: "https://sourceforge.net/projects/antix-linux/files/Final/antiX-23.2/antiX-23.2_x64-full.iso/download", description: "A lightweight, systemd-free Debian-based distro.", websiteLink: "https://antixlinux.com/", category: "lightweight", torrent: "https://antixlinux.com/?sdm_process_download=1&download_id=3029"},
    { name: "Q4OS", version: "5.7 x86_64", icon: "img/distro/q4os.png", downloadLink: "https://sourceforge.net/projects/q4os/files/stable/q4os-5.7-x64-tde.r1.iso/download", description: "A lightweight distro with a classic UI.", websiteLink: "https://q4os.org/", category: "lightweight"},
    { name: "Kumander Linux", version: "2.0 x86_64", icon: "img/distro/kumander.png", downloadLink: "https://www.kumander.org/download-kumander-linux#", description: "A distro inspired by good ol' Windows 7", websiteLink: "https://www.kumander.org/", category: "beginner"},
    { name: "Linux Lite", version: "7.2 x86_64", icon: "img/distro/linuxlite.png", downloadLink: "https://mirror.alpix.eu/linuxliteos/isos/7.2/linux-lite-7.2-64bit.iso", description: "A lightweight, user-friendly Ubuntu-based distro.", websiteLink: "https://www.linuxliteos.com/", category: "beginner", torrent: "https://mirror.alpix.eu/linuxliteos/isos/7.2/linux-lite-7.2-64bit.iso.torrent"},
    { name: "siduction", version: "2024.1.0 x86_64", icon: "img/distro/siduction.png", downloadLink: "https://ftp.spline.de/pub/siduction/iso/Shine_on/kde/siduction-2024.1.0-Shine_on-kde-amd64-202412261719.iso", description: "A rolling-release distro with cutting-edge software.", websiteLink: "https://siduction.org/", category: "beginner"},
    { name: "SparkyLinux", version: "7.6 x86_64", icon: "img/distro/sparky.png", downloadLink: "http://us2.repo.sparkylinux.org/iso/stable/sparkylinux-7.6-x86_64-xfce.iso", description: "A lightweight, Debian-based distro.", websiteLink: "https://sparkylinux.org/", category: "beginner", torrent: "https://distrowatch.com/dwres/torrents/sparkylinux-7.6-x86_64-xfce.iso.torrent"},
    { name: "Neptune", version: "8.1 x86_64", icon: "img/distro/neptune.png", downloadLink: "https://download.neptuneos.com/download/Neptune8-20240328.iso", description: "A Debian-based distro focused on multimedia.", websiteLink: "https://neptuneos.com/", category: "beginner"},
    { name: "Rhino Linux", version: "2025.1 x86_64", icon: "img/distro/rhino.png", downloadLink: "https://sourceforge.net/projects/rhino-linux-builder/files/2025.1/Rhino-Linux-2025.1-amd64.iso/download", description: "An Ubuntu-based rolling-release distro.", websiteLink: "https://rhinolinux.org/", category: "beginner"},
    { name: "DAT Linux", version: "2.0 x86_64", icon: "img/distro/datlinux.png", downloadLink: "https://sourceforge.net/projects/dat-linux/files/datlinux-2.0-lxqt-desktop-amd64.iso/download", description: "An Ubuntu-based distro for data science.", websiteLink: "https://datlinux.com/", category: "advanced"},
    { name: "Kaisen Linux", version: "3.0 x86_64", icon: "img/distro/kaisen.png", downloadLink: "https://iso.kaisenlinux.org/rolling/kaisenlinuxrolling3.0RC3-amd64-MATE.iso", description: "The distribution for professional IT.", websiteLink: "https://kaisenlinux.org/", category: "advanced", torrent: "https://torrent.kaisenlinux.org/kaisenlinuxrolling3.0RC3-amd64-MATE.iso.torrent"},
    { name: "Bodhi Linux", version: "7.0.0 x86_64", icon: "img/distro/bodhi.png", downloadLink: "https://sourceforge.net/projects/bodhilinux/files/7.0.0/bodhi-7.0.0-64.iso/download", description: "A lightweight distro featuring the Moksha desktop.", websiteLink: "https://www.bodhilinux.com/", category: "lightweight", torrent: "https://sourceforge.net/projects/bodhilinux/files/7.0.0/bodhi-7.0.0-64.iso.torrent/download"},
    { name: "Feren OS", version: "2023.04 x86_64", icon: "img/distro/ferenos.png", downloadLink: "https://sourceforge.net/projects/ferenoslinux/files/Feren-OS-standarddt.iso/download", description: "A user-friendly, Ubuntu-based distro.", websiteLink: "https://ferenos.weebly.com/", category: "beginner"},
    { name: "Vinari OS", version: "4.0.0 x86_64", icon: "img/distro/vinarios.png", downloadLink: "https://sourceforge.net/projects/vinari-os/files/HELIUM/Vinari-OS-4.0.0-HELIUM-x64.iso/download", description: "A user-friendly, Debian-based distro.", websiteLink: "https://vinarios.me/", category: "beginner"},
    { name: "Mabox Linux", version: "25.02 x86_64", icon: "img/distro/mabox.png", downloadLink: "https://sourceforge.net/projects/mabox-linux/files/latest/download", description: "A rolling-release customized Openbox wm distro.", websiteLink: "https://maboxlinux.org/", category: "lightweight"},
    { name: "instantOS", version: "7 x86_64", icon: "img/distro/instantos.svg", downloadLink: "https://github.com/instantOS/instantOS/releases/download/v7-beta/instantos_beta7.iso", description: "A lightning fast Arch-based distro.", websiteLink: "https://instantos.io/", category: "advanced"},
    { name: "ArcoLinux", version: "25.02.04 x86_64", icon: "img/distro/arcolinux.svg", downloadLink: "https://ant.seedhost.eu/arcolinux/iso/v25.02.04/arcoplasma-v25.02.04-x86_64.iso", description: "An Arch-based learning/teaching project.", websiteLink: "https://www.arcolinux.info/", category: "advanced", torrent: "https://ant.seedhost.eu/arcolinux/iso/v25.02.04/arcoplasma-v25.02.04-x86_64.iso.torrent"},
    { name: "Mageia", version: "9 x86_64", icon: "img/distro/mageia.png", downloadLink: "https://www.mageia.org/en/downloads/get/?q=Mageia-9-Live-Plasma-x86_64.iso", description: "RPM-based Linux distro forked from Mandriva.", websiteLink: "https://www.mageia.org/en/", category: "advanced", torrent: "https://www.mageia.org/en/downloads/get/?q=Mageia-9-Live-Plasma-x86_64.iso&torrent=1"},
    { name: "Venom Linux", version: "2025.02.09 x86_64", icon: "img/distro/venom.png", downloadLink: "https://nc.abetech.es/index.php/s/n96mosgP9p8dzEX#", description: "A lightweight source based distro.", websiteLink: "https://venomlinux.org/", category: "advanced"},
    { name: "ALT Linux", version: "2025.02.09 x86_64", icon: "img/distro/alt.png", downloadLink: "https://nightly.altlinux.org/p11/release/alt-p11-kde-20241212-x86_64.iso", description: "RPM-based distro focused on stability and security.", websiteLink: "https://getalt.org/en/", category: "advanced"},
    { name: "project Bluefin", version: "Stable x86_64", icon: "img/distro/bluefin.png", downloadLink: "https://download.projectbluefin.io/bluefin-stable.iso", description: "The next generation Linux workstation.", websiteLink: "https://projectbluefin.io/", category: "advanced"},
    { name: "MocaccinoOS", version: "1.8 x86_64", icon: "img/distro/mocaccino.png", downloadLink: "https://github.com/mocaccinoOS/mocaccino/releases/download/v1.8/MocaccinoOS-GNOME-0.20250201.iso.tar.xz", description: "A minimal Linux meta-distribution.", websiteLink: "https://www.mocaccino.org/", category: "advanced"},
    { name: "Adélie Linux", version: "1.0 x86_64", icon: "img/distro/adelie.png", downloadLink: "https://distfiles.adelielinux.org/adelie/1.0-beta6/iso/adelie-live-kde-x86_64-1.0-beta6-20241223.iso", description: "An independent distro for privacy and freedom.", websiteLink: "https://www.adelielinux.org/", category: "advanced"},
    { name: "TROM-Jaro", version: "2024.12.18 x86_64", icon: "img/distro/tromjaro.png", downloadLink: "https://www.drive.tromsite.com/s/TQccm6z52Hsr7rg#", description: "A trade-free operating system.", websiteLink: "https://www.tromjaro.com/", category: "beginner"},
    { name: "ParrotOS", version: "6.3 x86_64", icon: "img/distro/parrotos.png", downloadLink: "https://deb.parrot.sh/parrot/iso/6.3.2/Parrot-security-6.3.2_amd64.iso", description: "A distro focused on security and pentesting.", websiteLink: "https://parrotsec.org/", category: "advanced", torrent: "https://deb.parrot.sh/parrot/iso/6.3.2/Parrot-security-6.3.2_amd64.iso.torrent"},
    { name: "BlackArch Linux", version: "2023.05.01 x86_64", icon: "img/distro/blackarch.png", downloadLink: "https://ftp.halifax.rwth-aachen.de/blackarch/iso/blackarch-linux-slim-2023.05.01-x86_64.iso", description: "A distro designed for pentesting and security.", websiteLink: "https://blackarch.org/", category: "advanced", torrent: "https://blackarch.org/blackarch/torrent/blackarch-linux-slim-2023.05.01-x86_64.iso.torrent"},
    { name: "rlxos", version: "Stable x86_64", icon: "img/distro/rlxos.png", downloadLink: "https://sourceforge.net/projects/rlxos/files/releases/stable/rlxos-stable-installer.iso/download", description: "An independent, safely mutable os.", websiteLink: "https://rlxos.dev/", category: "beginner"},
    { name: "Arkane Linux", version: "2024.10.26 x86_64", icon: "img/distro/arkane.png", downloadLink: "https://download.arkanelinux.org/iso/arkanelinux-arkdep-2024.10.26/arkanelinux-arkdep-2024.10.26-uefi_only.iso", description: "An opinionated, immutable, atomic distro.", websiteLink: "https://arkanelinux.org/", category: "advanced"},
    { name: "blendOS", version: "4 x86_64", icon: "img/distro/blendos.svg", downloadLink: "https://git.blendos.co/api/v4/projects/32/jobs/artifacts/main/raw/blendOS.iso?job=build-job", description: "A declarative, immutable and atomic distro.", websiteLink: "https://blendos.co/", category: "beginner"},
    { name: "Cereus Linux", version: "2023.02.17 x86_64", icon: "img/distro/cereus.svg", downloadLink: "https://sourceforge.net/projects/cereus-linux/files/isos/beta/2023.02.19/xfce/cereus-beta-live-x86_64-xfce-2023.02.17.iso/download", description: "A Void-based user-friendly distro.", websiteLink: "https://cereus-linux.codeberg.page/", category: "beginner"},
    { name: "Mauna Linux", version: "24.4 x86_64", icon: "img/distro/mauna.png", downloadLink: "https://cdimage.maunalinux.top/latest/MaunaLinux-24.4-Cinnamon-amd64.iso", description: "A free and open-source Linux operating system.", websiteLink: "https://maunalinux.top/", category: "beginner"},
    { name: "Ufficio Zero Linux", version: "11 x86_64", icon: "img/distro/ufficiozero.png", downloadLink: "https://sourceforge.net/projects/ufficiozero/files/11-desktop/x86_64/iso/UZL-11_2-desktop-x86_64.iso/download", description: "A business-focused Linux distro.", websiteLink: "https://www.ufficiozero.org/index.php?alias=home-page2", category: "beginner", torrent: "https://sourceforge.net/projects/ufficiozero/files/11-desktop/x86_64/iso/UZL-11_2-desktop-x86_64.iso.torrent/download"},
    { name: "MiniOS", version: "Standard x86_64", icon: "img/distro/minios.png", downloadLink: "https://minios.dev/download.html?d=bookworm&de=xfce&pv=standard&a=amd64&v=v4.1.0&lang=en", description: "A compact os designed for everyday tasks.", websiteLink: "https://minios.dev/", category: "beginner"},
    { name: "wattOS", version: "R13 x86_64", icon: "img/distro/wattos.png", downloadLink: "https://extantpc.com/iso/wattOS-R13.iso", description: "A simple, minimal and fast distro.", websiteLink: "https://www.planetwatt.com/", category: "beginner", torrent: "https://planetwatt.com/wattiso/wattOS-R13.iso.torrent"},
    { name: "Window Maker Live", version: "12.8 x86_64", icon: "img/distro/wmlive.png", downloadLink: "https://sourceforge.net/projects/wmlive/files/wmlive-bookworm-12.8/wmlive-bookworm_12.8-amd64.iso/download", description: "A Debian-based distro with WMaker.", websiteLink: "https://wmlive.sourceforge.net/", category: "advanced"},
    { name: "DraugerOS", version: "7.7 x86_64", icon: "img/distro/drauger.png", downloadLink: "https://download-optimizer.draugeros.org/ISOs/Drauger_OS-7.7-AMD64.iso", description: "An Ubuntu-based gaming distro.", websiteLink: "https://wmlive.sourceforge.net/", category: "advanced"},
    { name: "Voyager", version: "24.10 x86_64", icon: "img/distro/voyager.png", downloadLink: "https://sourceforge.net/projects/voyagerlive/files/Voyager-24.10-amd64.iso/download", description: "An Ubuntu LTS and Debian-based distro.", websiteLink: "https://voyagerlive.org/", category: "beginner"},
    { name: "Lilidog Linux", version: "25.01.25 x86_64", icon: "img/distro/lilidog.svg", downloadLink: "https://sourceforge.net/projects/lilidog/files/latest/download", description: "An optimized Debian-based openbox desktop.", websiteLink: "https://lilidog.org/", category: "beginner"},
    { name: "Ultramarine Linux", version: "40 x86_64", icon: "img/distro/ultramarine.svg", downloadLink: "https://images.fyralabs.com/isos/ultramarine/40/ultramarine-flagship-40-live-x86_64.iso", description: "A Fedora-based enhanced distro.", websiteLink: "https://ultramarine-linux.org/", category: "beginner"},
    { name: "Salix", version: "15.0 x86_64", icon: "img/distro/salix.png", downloadLink: "https://sourceforge.net/projects/salix/files/15.0/salix64-xfce-15.0.iso/download", description: "Linux for the lazy Slacker.", websiteLink: "https://www.salixos.org/", category: "advanced", torrent: "https://download.salixos.org/x86_64/15.0/iso/salix64-xfce-15.0.torrent"},
    { name: "Obarun", version: "2025.01.23 x86_64", icon: "img/distro/obarun.png", downloadLink: "https://web.obarun.org/latest/jwm/", description: "An Arch-based distro focused on systemd-free init.", websiteLink: "https://web.obarun.org/", category: "advanced"},
    { name: "Netrunner", version: "25 x86_64", icon: "img/distro/netrunner.png", downloadLink: "https://pub.netrunner.com/netrunner-25-64-bit.iso", description: "A polished Debian-based distro.", websiteLink: "https://www.netrunner.com/", category: "beginner", torrent: "https://pub.netrunner.com/netrunner-25-64-bit.torrent"},
    { name: "Nitrux", version: "3.9.0 x86_64", icon: "img/distro/nitrux.png", downloadLink: "https://sourceforge.net/projects/nitruxos/files/latest/download", description: "Simple, quick and responsive distro.", websiteLink: "https://nxos.org/", category: "beginner"},
    { name: "NuTyX", version: "25.02 x86_64", icon: "img/distro/nutyx.png", downloadLink: "https://sourceforge.net/projects/nutyx/files/ISOs/systemv/NuTyX_x86_64-25.02.5-XFCE4.iso", description: "A very flexible, complete GNU/Linux distro.", websiteLink: "https://nutyx.org/en/", category: "advanced"},
    { name: "Dr.Parted", version: "25.02 x86_64", icon: "img/distro/drparted.png", downloadLink: "https://sourceforge.net/projects/dr-parted-live/files/latest/download", description: "A Debian Testing live distro.", websiteLink: "https://dr-parted-live.sourceforge.io/", category: "advanced"},
    { name: "Xebian", version: "Unstable x86_64", icon: "img/distro/xebian.png", downloadLink: "https://xebian.org/download/xebian-unstable-amd64.hybrid.iso", description: "A Debian based system that is much like Xubuntu.", websiteLink: "https://xebian.org/", category: "advanced"},
    { name: "StratOS", version: "2024.09.13 x86_64", icon: "img/distro/stratos.png", downloadLink: "https://github.com/StratOS-Linux/gnome-iso/releases/download/v2024.09.13/StratOS-2024.09.13-x86_64.iso", description: "A new distro that uses scripts from Bedrock Linux.", websiteLink: "https://stratos-linux.org/", category: "advanced"},
    { name: "ArchBang", version: "0902 x86_64", icon: "img/distro/archbang.png", downloadLink: "https://sourceforge.net/projects/archbang/files/latest/download", description: "A lightweight distribution based on Arch Linux.", websiteLink: "https://archbang.org/", category: "lightweight"},
    { name: "BackBox Linux", version: "9 x86_64", icon: "img/distro/backbox.png", downloadLink: "https://backbox.mirror.garr.it/backbox-9-desktop-amd64.iso", description: "A pentesting and security oriented distro.", websiteLink: "https://linux.backbox.org/", category: "advanced"},
    { name: "KaOS", version: "2025.01 x86_64", icon: "img/distro/kaos.svg", downloadLink: "https://sourceforge.net/projects/kaosx/files/ISO/KaOS-2025.01-x86_64.iso", description: "An independent, built from-scratch Linux distro.", websiteLink: "https://kaosx.us/", category: "advanced"},
    { name: "TileOS", version: "1.2 x86_64", icon: "img/distro/tileos.svg", downloadLink: "https://downloads.tile-os.com/stable/sway/tileos-sway-1.2.1-desktop-amd64.iso", description: "Debian-based distro with tiling wms.", websiteLink: "https://tile-os.com/", category: "advanced"},
    { name: "eweOS", version: "2025.01 x86_64", icon: "img/distro/eweos.svg", downloadLink: "https://os-repo-cloudflare.ewe.moe/eweos-images/eweos-x86_64-liveimage-desktop-xfce.iso", description: "A musl-based, lightweight, general-purpose distro.", websiteLink: "https://os.ewe.moe/", category: "advanced"},
    { name: "AxOS", version: "25.01 x86_64", icon: "img/distro/axos.png", downloadLink: "https://github.com/AxOS-project/AxOS/releases/download/25.01-1/AxOS-25.01-x86_64.iso", description: "The Linux experience, enhanced.", websiteLink: "https://www.axos-project.com/", category: "advanced"},
    { name: "BesGnuLinux", version: "02.07 x86_64", icon: "img/distro/besgnulinux.png", downloadLink: "https://sourceforge.net/projects/besgnulinux/files/latest/download", description: "A fast, lightweight, convenient and stable distro.", websiteLink: "https://besgnulinux.blogspot.com/", category: "lightweight"},
    { name: "Vendefoul Wolf Linux", version: "310125 x86_64", icon: "img/distro/vengefoulwolf.png", downloadLink: "https://sourceforge.net/projects/vendefoul-wolf-linux/files/Vendefoul%20Wolf%20Excalibur/Plasma%2064%20Bits/Vendefoul-Excalibur-KDE_Plasma_amd64_v310125.iso/download", description: "A free full GNU/Linux distribution.", websiteLink: "https://vendefoulwolf.wordpress.com/", category: "beginner"},
    { name: "WolfOS", version: "StickySyrup x86_64", icon: "img/distro/wolfos.png", downloadLink: "https://sourceforge.net/projects/wolfos/files/latest/download", description: "A powerful, lightweight, and developer-friendly OS.", websiteLink: "https://wolfos.pages.dev/", category: "advanced"},
    { name: "PikaOS Linux", version: "4.0 x86_64", icon: "img/distro/pikaos.svg", downloadLink: "https://cdn.pika-os.com/PikaOS-Nest-GNOME-4.0-amd64-v3-25.01.28-1.iso", description: "A gaming/optimization-focused Linux distro", websiteLink: "https://wiki.pika-os.com/en/home", category: "beginner"},
    { name: "Quarkos", version: "24.04 x86_64", icon: "img/distro/quarkos.png", downloadLink: "https://sourceforge.net/projects/quark-os/files/latest/download", description: "A user friendly, desktop oriented operating system.", websiteLink: "https://quark-os.sourceforge.io/", category: "beginner"},
    { name: "Storm OS", version: "2025.01.16 x86_64", icon: "img/distro/stormos.png", downloadLink: "https://sourceforge.net/projects/hackman-linux/files/latest/download", description: "An easy, out of the box Arch Linux experience.", websiteLink: "https://techcafe757.wixsite.com/storm-os", category: "advanced"},
    { name: "Archman Linux", version: "Stable x86_64", icon: "img/distro/archman.png", downloadLink: "https://sourceforge.net/projects/archman-os/files/latest/download", description: "A powerful, lightweight, fast, and stable distro.", websiteLink: "https://archman.org/", category: "lightweight"},
    { name: "joborun linux", version: "Latest x86_64", icon: "img/distro/joborun.png", downloadLink: "https://sourceforge.net/projects/joborun/files/images/jobo-latest.tar.xz", description: " Arch with runit instead of systemd.", websiteLink: "https://joborun.neocities.org/joborun", category: "lightweight"},
    { name: "Shebang", version: "Latest x86_64", icon: "img/distro/shebang.png", downloadLink: "https://github.com/shebang-linux/shebang/releases/download/latest/shebang-x86_64.iso", description: "An Artix GNU/Linux based distribution.", websiteLink: "https://shebang-linux.github.io/", category: "lightweight"},
    { name: "Elive", version: "Retrowave x86_64", icon: "img/distro/elive.png", downloadLink: "https://www.elivecd.org/downloads/retro/3.8.32/39c35954dc/elive_3.8.32_retro_hybrid_amd64.iso", description: "Turn old PCs into high-performance machines.", websiteLink: "https://www.elivecd.org/", category: "lightweight", torrent: "https://www.elivecd.org/wp-content/uploads/files/elive_3.8.32_retrowave__32+64bit.torrent"},
    { name: "Ditana", version: "0.9.0 x86_64", icon: "img/distro/ditana.png", downloadLink: "https://ditana.org/downloads/Ditana-0.9.0-Beta-x86_64.iso", description: "A highly configurable GNU/Linux with built-in AI.", websiteLink: "https://ditana.org/", category: "advanced"},
    { name: "Dynebolic", version: "4.0.0 x86_64", icon: "img/distro/dynebolic.png", downloadLink: "https://files.dyne.org/dynebolic/dynebolic-4.0.0-beta.iso", description: "A 100% free GNU+Linux distribution.", websiteLink: "https://dyne.org/dynebolic/", category: "advanced"},
    { name: "DeLinuxCo", version: "24.2.1 x86_64", icon: "img/distro/delinuxco.png", downloadLink: "https://www.delinuxco.com/?sdm_process_download=1&download_id=4088", description: "A Linux professional workstation.", websiteLink: "https://www.delinuxco.com/", category: "advanced"},
    { name: "Damn Small Linux", version: "2024.rc7 x86_64", icon: "img/distro/dsl.png", downloadLink: "https://www.damnsmalllinux.org/download/dsl-2024.rc7.iso", description: "A compact disto tailored for low-spec x86 PCs.", websiteLink: "https://www.damnsmalllinux.org/", category: "lightweight"},
    { name: "LazyLinux", version: "2024.12.25 x86_64", icon: "img/distro/lazylinux.png", downloadLink: "https://www.mediafire.com/file/n8fb4hlwjf2ki3p/lazylinux-live-x86_64-20241225-xfce.iso/file", description: "A pre-configured Void-based distro.", websiteLink: "https://lazylinuxos.github.io/", category: "beginner"},
    { name: "Liya Linux", version: "2.2 x86_64", icon: "img/distro/liya.png", downloadLink: "https://sourceforge.net/projects/liya-2024/files/latest/download", description: "A lightweight and efficient operating system.", websiteLink: "https://liyalinux.gitlab.io/", category: "beginner"},
    { name: "Endless OS", version: "6.0.5 x86_64", icon: "img/distro/endlessos.png", downloadLink: "https://images-dl.endlessm.com/release/6.0.5/eos-amd64-amd64/base/eos-eos6.0-amd64-amd64.250109-205325.base.iso", description: "A user-friendly os packed with educational tools.", websiteLink: "https://www.endlessos.org/os", category: "beginner", torrent: "https://images-dl.endlessm.com/torrents/public/eos-amd64-amd64-base-6.0.5-iso.torrent"},
    { name: "Emmabuntüs", version: "DE5 x86_64", icon: "img/distro/emmabuntüs.png", downloadLink: "https://sourceforge.net/projects/emmabuntus/files/Emmabuntus_DE5/Images/1.03/emmabuntus-de5-amd64-12.8-1.03.iso", description: "An all-in-one GNU/Linux distribution.", websiteLink: "https://emmabuntus.org/", category: "beginner", torrent: "https://sourceforge.net/projects/emmabuntus/files/Emmabuntus_DE5/Images/1.03/emmabuntus-de5-amd64-12.8-1.03.iso.torrent"},
    { name: "Lingmo OS", version: "3.0 x86_64", icon: "img/distro/lingmoos.png", downloadLink: "https://releases.lingmo.org.cn/releases/3.0rc", description: "An operating system based on Linux.", websiteLink: "https://lingmo.org/en", category: "beginner"},
    { name: "GXDE OS", version: "15.14.3 x86_64", icon: "img/distro/gxde.png", downloadLink: "https://sourceforge.net/projects/gxde-os/files/latest/download", description: "Gorgeous eXtended Deepin Environment.", websiteLink: "https://www.gxde.top/en/", category: "beginner"},
    { name: "CatOS", version: "2025.01.05 x86_64", icon: "img/distro/catos.svg", downloadLink: "https://drive.google.com/file/d/1i8B8XNR4-IwcIAdcN4i9w9hgTHXLpvU6/view?usp=sharing", description: "Out-of-the-box Arch-based distribution.", websiteLink: "https://catos.info/en/", category: "beginner"},
    { name: "AnduinOS", version: "1.1 x86_64", icon: "img/distro/anduinos.png", downloadLink: "https://download.anduinos.com/1.1/1.1.1/AnduinOS-1.1.1-en_US.iso", description: "A custom Debian-based Linux distribution", websiteLink: "https://www.anduinos.com/", category: "beginner"},
    { name: "openKylin", version: "2.0 SP1 x86_64", icon: "img/distro/openkylin.png", downloadLink: "https://www.openkylin.top/downloads/download-smp.php?id=80", description: "A Linux operating system based on Ubuntu.", websiteLink: "https://www.openkylin.top/index-en.html", category: "beginner"},
    { name: "NebiOS", version: "3.2 x86_64", icon: "img/distro/nebios.svg", downloadLink: "https://release.nebisoftware.com/NebiOS/Stable/3.2/nebios-3.2-amd64.iso", description: "A quantum leap forward in Linux innovation.", websiteLink: "https://nebisoftware.com/nebios", category: "beginner"},
    { name: "Accessible-Coconut", version: "22.04.3 x86_64", icon: "img/distro/ac.png", downloadLink: "https://sourceforge.net/projects/accessible-coconut/files/latest/download", description: "A GNU/Linux OS derived from Ubuntu-MATE.", websiteLink: "https://zendalona.com/accessible-coconut/", category: ""},
    { name: "Loc-OS", version: "23 x86_64", icon: "img/distro/loc-os.png", downloadLink: "https://sourceforge.net/projects/loc-os/files/Loc-OS%2023/Loc-OS-23-LXDE-x86_64.iso/download", description: "A distro focused on low resource consumption.", websiteLink: "https://loc-os.com/", category: "beginner"},
    { name: "TigerOS", version: "23 x86_64", icon: "img/distro/tiger-os.png", downloadLink: "https://drive.google.com/file/d/18MdKVHROrX1zxSujN_gcQkpzybgyY_oF/view?usp=drive_link", description: "Secure, fast and stable distro.", websiteLink: "https://tigeros.com.br/", category: "beginner"},
    { name: "CuerdOS", version: "1.2 x86_64", icon: "img/distro/cuerdos.png", downloadLink: "https://sourceforge.net/projects/cuerdos/files/stable/standard/CuerdOS-1.2-Standard_amd64.iso/download", description: "Distro focused on stability and performance.", websiteLink: "https://cuerdos.github.io/", category: "lightweight"},
    { name: "MODICIA O.S.", version: "6.12.9 x86_64", icon: "img/distro/modicia.png", downloadLink: "https://sourceforge.net/projects/modicia-o-s/files/latest/download", description: "A complete linux os for pro multimedia users.", websiteLink: "https://www.modiciaos.cloud/", category: "beginner"},
    { name: "Alien-OS", version: "Regolith Prime x86_64", icon: "img/distro/alienos.png", downloadLink: "https://sourceforge.net/projects/alien-os-nano/files/latest/download", description: "Debian-based distro with integrated MX-Tools.", websiteLink: "https://www.alien-os.de/", category: "advanced"},
    { name: "Predator-OS", version: "3.5 x86_64", icon: "img/distro/predator-os.png", downloadLink: "https://www.seilany.ir/predator-os/download/v35/Predator-OS-v3.5-amd64-SecurityEdition-mate-lxde.iso", description: "A distro for security and academy education.", websiteLink: "https://predator-os.ir/", category: "advanced"},
    { name: "Exodia OS", version: "2024.02.21 x86_64", icon: "img/distro/exodia.png", downloadLink: "https://omansh.vercel.app/api/raw/?path=/ExodiaOS/latest/home/exodia-home-2024.02.21-x86_64.iso", description: "A customized distro For all cybersecurity fields.", websiteLink: "https://exodia-os.github.io/", category: "advanced"},
    { name: "Pentoo", version: "2025.0 x86_64", icon: "img/distro/pentoo.png", downloadLink: "https://www.pentoo.ch/isos/Release/Pentoo_Full_amd64_hardened/pentoo-full-amd64-hardened-2025.0_p20250205.iso", description: "Distro for pentesting and security assessment.", websiteLink: "https://www.pentoo.ch/", category: "advanced"},
    { name: "OmegaLinux", version: "3.0 x86_64", icon: "img/distro/omegalinux.png", downloadLink: "https://github.com/ohjhas/omega-linux/releases/download/3.0/omegalinux-3.0-seaopen-amd64.iso", description: "A lightweight OS with LXDE based on Ubuntu.", websiteLink: "https://ohjhas.github.io/omega-linux-en/index.html", category: "lightweight"},
    { name: "Oreon 10 Core", version: "2501.4 x86_64", icon: "img/distro/oreon.png", downloadLink: "https://boostyconnect.com/download/3715/?tmstv=1732267314", description: "Enterprise Linux but a little friendlier.", websiteLink: "https://oreonproject.org/", category: "beginner"},
    { name: "Sigma Linux", version: "4.0 x86_64", icon: "img/distro/sigmalinux.png", downloadLink: "https://github.com/rdbo/sigma-linux/releases/download/4.0/sigma-linux.iso", description: "Elite operating system.", websiteLink: "https://github.com/rdbo/sigma-linux", category: "advanced"},
];

const distroList = document.getElementById('distroList');

const scrollToTop = document.querySelector('.scroll-to-top');

scrollToTop.style.display = 'none';

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTop.style.display = 'flex';
        gsap.to(scrollToTop, { duration: 0.3, opacity: 1, scale: 1 });
    } else {
        gsap.to(scrollToTop, { 
            duration: 0.3, 
            opacity: 0, 
            scale: 0.8,
            onComplete: () => {
                if (window.pageYOffset <= 300) {
                    scrollToTop.style.display = 'none';
                }
            }
        });
    }
});

scrollToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const loadingAnimation = gsap.timeline();
loadingAnimation.from('h1', {
    duration: 1,
    opacity: 0,
    y: 30,
    ease: 'power3.out'
});

function createDistroCard(distro, animate = true) {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
        <div class="card h-100">
            <div class="card-img-container">
                <img src="${distro.icon}" class="card-img-top" alt="${distro.name} logo" loading="lazy">
            </div>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">
                    ${distro.websiteLink ? `<a href="${distro.websiteLink}" class="distro-title-link" target="_blank" rel="noopener noreferrer">` : ''}
                    <strong>${distro.name}</strong>
                    ${distro.websiteLink ? '</a>' : ''}
                    ${distro.videoLink ? `<a href="${distro.videoLink}" target="_blank" class="video-link"><i class="fab fa-youtube"></i></a>` : ''}
                </h5>
                <p class="card-text distro-version">
                    <strong><i class="fas fa-code-branch"></i> Version:</strong> ${distro.version}
                </p>
                <p class="card-text flex-grow-1">${distro.description}</p>
                <div class="mt-auto position-relative">
                    <div class="btn-container">
                        <a href="${distro.downloadLink}" target="_blank" class="btn btn-download flex-grow-1" rel="noopener noreferrer">
                            <i class="fas fa-download me-2"></i>Direct Download
                        </a>
                        ${distro.torrent ? `
                        <a href="${distro.torrent}" class="torrent-icon" title="Download via Torrent" rel="noopener noreferrer">
                            <i class="fas fa-magnet fa-lg"></i>
                        </a>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
    distroList.appendChild(card);

    if (animate) {
        gsap.from(card, {
            duration: 0.8,
            opacity: 0,
            y: 50,
            ease: "power3.out"
        });
    }
}

let currentFilter = '';

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        if (currentFilter === filter) {
            currentFilter = ''; // clear 
        } else {
            button.classList.add('active');
            currentFilter = filter;
        }
        
        filterDistributions(searchInput.value);
    });
});

function filterDistributions(searchTerm) {
    const distroList = document.getElementById('distroList');
    distroList.innerHTML = '';

    const filteredDistros = distributions.filter(distro => {
        const matchesSearch = (
            distro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            distro.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            distro.version.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        let matchesCategory = !currentFilter || distro.category === currentFilter;

        if (currentFilter === 'torrent') {
            matchesCategory = distro.torrent !== undefined;
        }
        
        console.log("searchTerm:", searchTerm, "currentFilter:", currentFilter, "distro.name:", distro.name, "matchesSearch:", matchesSearch, "matchesCategory:", matchesCategory);

        return matchesSearch && matchesCategory;
    });

    filteredDistros.forEach(distro => createDistroCard(distro, true));
}

distributions.forEach((distro, index, self) => {
    if (self.findIndex(t => t.name === distro.name) === index) createDistroCard(distro, true);
});

const disclaimerFooter = document.getElementById('disclaimer-footer');
const closeButton = document.querySelector('.close-button');
const searchContainer = document.querySelector('.search-container');
const githubLink = document.querySelector('.github-link');

gsap.from(searchContainer, {
    duration: 0.8,
    opacity: 0,
    y: 50,
    ease: "power3.out"
});

gsap.from(githubLink, {
    duration: 0.8,
    opacity: 0,
    y: 50,
    ease: "power3.out"
});

if (localStorage.getItem('disclaimerClosed') === 'true') {
    disclaimerFooter.style.display = 'none';
}

closeButton.addEventListener('click', () => {
    disclaimerFooter.style.display = 'none';
    localStorage.setItem('disclaimerClosed', 'true');
});

const searchInput = document.getElementById('distroSearch');

searchInput.addEventListener('input', (e) => {
    filterDistributions(e.target.value);
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const tooltip = document.createElement('div');
        tooltip.className = 'copy-tooltip';
        tooltip.textContent = 'Link copied!';
        document.body.appendChild(tooltip);

        gsap.to(tooltip, {
            duration: 0.3,
            opacity: 1,
            y: -10
        });

        setTimeout(() => {
            gsap.to(tooltip, {
                duration: 0.3,
                opacity: 0,
                y: 0,
                onComplete: () => tooltip.remove()
            });
        }, 2000);
    });
}

const tooltipStyle = document.createElement('style');
tooltipStyle.textContent = `
    .copy-tooltip {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 8px 16px;
        border-radius: 4px;
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
    }
`;
document.head.appendChild(tooltipStyle);

const style = document.createElement('style');
style.textContent = `
    .globe-icon {
        color: #FFFF;
        transition: color 0.3s ease;
    }
    .globe-icon:hover {
        color: #4FD2D7;
    }
    .link-icon {
        color: #FFFF;
        transition: color 0.3s ease;
    }
    .link-icon:hover {
        color: #4FD2D7;
    }
`;
document.head.appendChild(style);

particlesJS('particles-js', {
    particles: {
        number: { value: 300, density: { enable: true, value_area: 800 } },
        color: { value: ["#ffffff", "#87cefa", "#4FD2D7", "#8CFFFA"] },
        shape: { type: "circle" },
        opacity: { value: 0.8, random: true },
        size: { value: 5, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 0.2, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "bubble" }, onclick: { enable: true, mode: "repulse" }, resize: true },
        modes: { bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 }, repulse: { distance: 400, duration: 0.4 } }
    },
    retina_detect: true
});
