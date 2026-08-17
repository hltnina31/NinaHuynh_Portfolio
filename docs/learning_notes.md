## map()

Hva er map()?

map() går gjennom hvert element i en array og utfører den samme koden for hvert element.

I React brukes map() ofte til å vise lister med komponenter.

Eksempel:

navigationItems.map((navigationItem) => (
    <Button>{navigationItem}</Button>
))

Hvis arrayen inneholder fem elementer, vil React lage fem Button-komponenter.

Fordeler:
- Mindre repetitiv kode.
- Enklere å vedlikeholde.
- Skalerer automatisk dersom arrayen blir større eller mindre.