var handler = async m => m.reply(`
╭─「 Hubungi 」
│ > Ingin donasi? wa.me/6283809157951
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
