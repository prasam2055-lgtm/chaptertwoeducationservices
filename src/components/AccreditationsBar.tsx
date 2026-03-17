const accreditations = [
  "British Council IELTS Partner",
  "Ministry of Education Nepal Approved",
  "ICEF Agency Status",
];

const AccreditationsBar = () => (
  <div className="bg-surface py-8 border-y border-border">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-12 opacity-50">
      {accreditations.map((a) => (
        <span key={a} className="font-bold text-foreground text-sm">{a}</span>
      ))}
    </div>
  </div>
);

export default AccreditationsBar;
