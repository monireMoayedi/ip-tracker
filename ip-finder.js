class IP {
  async findIp(i) {
    const res = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_DYITxWR3ZMmf1hklTZQcE85EHoMCq&ipAddress=${i}`
    );
    const data = await res.json();
    return data;
  }
}
