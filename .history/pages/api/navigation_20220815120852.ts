export default (req, res) => {
    res.status(200).json([
      {children: "Home", href: "/"},
      {children: "About", href: "/about"},
      {children: "Contact", href: "/contact"},
      {children: "E", href: "/contact"},
    ])
  }