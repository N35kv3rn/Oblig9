const people = [
  {
    name:  'Marcus Neskvern',
    age: 21,
    gender: 'Male',
    romnummer: 'H1011'
  },
  {
    name:  'Andreas Lyngnes',
    age: 54,
    gender: 'Male',
    romnummer: 'H1012'
  },
  {
    name: 'Marcos Parcos',
    age: 22,
    gender: 'Unknown',
    romnummer: 'H1005'
  },
  {
    name:  'Jonas Bonas',
    age: 21,
    gender: 'Male',
    romnummer: 'H1006'
  },
  {
    name:  'Andrea Gaddebus',
    age: 22,
    gender: 'Female',
    romnummer: 'H1007'
  },
  {
    name:  'Henriette Kwabbe',
    age: 21,
    gender: 'Female',
    romnummer: 'H1008'
  },
  {
    name:  'Marie Maupen',
    age: 21,
    gender: 'Female',
    romnummer: 'H1009'
  },
  {
    name:  'Nicolai Faume',
    age: 22,
    gender: 'Betamale',
    romnummer: 'H1010'
  },
]

export default function handler(req, res) {
  res.status(200).json({ success: true, data: people })
}
