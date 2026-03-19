export default function ProLoftConversionsWebsite() {
  const reviews = [
    {
      name: "Byron Alive",
      yearsAgo: "4 years ago",
      rating: 5,
      text:
        "Had a job in my gym that needed doing ASAP and one of my clients suggested Pro Loft Conversions. Only rang yesterday morning and to fit my gym opening times the lads came and did the job today even though it's a Sunday. Very polite and respectful lads from the start and the job is spot on. We will be using them again 100%! Thanks lads!",
    },
  ];

  const services = [
    {
      title: "Dormer Loft Conversions",
      description:
        "Create generous head height, elegant storage and light-filled living space with a premium dormer build designed around your home.",
    },
    {
      title: "Velux Loft Transformations",
      description:
        "A refined, lower-disruption option for homeowners who want a bright, beautifully finished loft without altering the roofline dramatically.",
    },
    {
      title: "Hip-to-Gable Conversions",
      description:
        "Maximise awkward roof space and unlock striking extra room with a smart structural redesign that feels seamless from the street.",
    },
    {
      title: "Loft Bedrooms & En Suites",
      description:
        "Turn unused roof space into a sophisticated principal suite, guest retreat or teenage hideaway with bespoke joinery and luxury finishes.",
    },
  ];

  const promises = [
    "Fast response and reliable scheduling",
    "Polite, respectful team on every job",
    "High-standard workmanship and clean finishes",
    "Flexible around your timing and daily routine",
  ];

  const process = [
    {
      step: "01",
      title: "Private Consultation",
      text:
        "We assess your loft, understand how you want to live in the space, and shape a concept that feels both practical and aspirational.",
    },
    {
      step: "02",
      title: "Design & Planning",
      text:
        "We map out layout, structure and finish direction, giving you a clear vision and a premium-feel path from idea to build.",
    },
    {
      step: "03",
      title: "Crafted Build",
      text:
        "Our team delivers with professionalism, pace and respect for your home, keeping disruption low and standards high throughout.",
    },
    {
      step: "04",
      title: "Luxury Finish",
      text:
        "From final detailing to handover, we focus on polish, comfort and value, so the new space feels like the best room in the house.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white selection:bg-white selection:text-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-[-10%] h-96 w-96 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute top-[28rem] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-stone-200/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_20%,transparent_80%,rgba(255,255,255,0.03))]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.45em] text-amber-200/80">Luxury Loft Specialists</div>
            <div className="mt-1 text-xl font-semibold tracking-[0.18em] text-white">PRO LOFT CONVERSIONS</div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#process" className="transition hover:text-white">Process</a>
            <a href="#reviews" className="transition hover:text-white">Reviews</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-amber-200/30 bg-white px-5 py-2 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            Book a Free Quote
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70">
              Premium design. Trusted delivery.
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-tight text-white md:text-7xl">
              Transform your loft into the most desirable room in the house.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              Pro Loft Conversions creates elegant, high-value spaces with a service style customers describe as fast, respectful and spot on. From concept to crafted finish, every detail is built to elevate your home.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                Arrange Your Consultation
              </a>
              <a
                href="#reviews"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                See Client Love
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
              {promises.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/75 shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
                >
                  <span className="mr-2 text-amber-200">◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-amber-200/15 via-transparent to-white/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Signature Standard</p>
                    <h2 className="mt-2 text-2xl font-semibold">Built around comfort, beauty and value</h2>
                  </div>
                  <div className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/70">Bespoke Finish</div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
                    <div className="text-sm uppercase tracking-[0.3em] text-white/50">Ideal for</div>
                    <div className="mt-3 text-2xl font-medium">Bedrooms, offices, en suites, studios</div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5">
                      <div className="text-xs uppercase tracking-[0.3em] text-white/45">Service Feel</div>
                      <div className="mt-3 text-lg font-medium">Fast, flexible, respectful</div>
                    </div>
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5">
                      <div className="text-xs uppercase tracking-[0.3em] text-white/45">Outcome</div>
                      <div className="mt-3 text-lg font-medium">High-end space that sells the home</div>
                    </div>
                  </div>
                  <div className="rounded-[1.4rem] border border-amber-200/20 bg-amber-100/[0.06] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.3em] text-amber-100/60">Client Response</div>
                        <div className="mt-2 text-lg font-medium">“Very polite and respectful lads… the job is spot on.”</div>
                      </div>
                      <div className="text-3xl text-amber-200">★★★★★</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:grid-cols-3">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/45">Brand Positioning</div>
              <div className="mt-3 text-2xl font-semibold">Professional craftsmanship with a luxury edge</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/45">Ideal Customer</div>
              <div className="mt-3 text-white/75">Homeowners who want more space, more style and a builder they can trust inside their home.</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/45">Conversion Goal</div>
              <div className="mt-3 text-white/75">Turn empty roof space into a polished, valuable extension of the way they live.</div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Services</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Loft conversions designed to feel seamless and luxurious</h2>
            </div>
            <p className="max-w-xl text-white/65">
              Whether you want understated sophistication or a bold new master suite, each project is planned around liveability, finish quality and long-term property value.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-medium">{service.title}</h3>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/45">
                    Bespoke
                  </div>
                </div>
                <p className="mt-4 text-base leading-7 text-white/68">{service.description}</p>
                <div className="mt-8 text-sm uppercase tracking-[0.24em] text-amber-200/80">Premium detailing included</div>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.35em] text-amber-200/70">The Process</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">A smooth build experience that protects your time and your home</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="text-sm tracking-[0.35em] text-amber-200/80">{item.step}</div>
                <h3 className="mt-5 text-2xl font-medium">{item.title}</h3>
                <p className="mt-4 text-white/68 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Reviews</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Trusted for speed, respect and quality</h2>
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/70">
              Early brand proof rooted in real client praise
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-2xl font-medium">{review.name}</div>
                    <div className="mt-1 text-sm text-white/45">{review.yearsAgo}</div>
                  </div>
                  <div className="text-2xl text-amber-200">{"★".repeat(review.rating)}</div>
                </div>
                <p className="mt-6 text-lg leading-8 text-white/75">“{review.text}”</p>
              </div>
            ))}

            <div className="rounded-[2rem] border border-amber-200/15 bg-gradient-to-br from-amber-100/[0.08] to-white/[0.03] p-8">
              <div className="text-xs uppercase tracking-[0.35em] text-amber-100/70">What this tells us</div>
              <h3 className="mt-3 text-3xl font-semibold">The brand should feel premium, but approachable</h3>
              <div className="mt-6 space-y-4 text-white/72">
                <p>
                  Customers value the team’s responsiveness, professionalism and willingness to work around real-life constraints.
                </p>
                <p>
                  That means the site should not only look luxurious, it should also communicate trust, speed and a no-fuss experience from first contact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))]">
            <div className="grid gap-10 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Why choose Pro Loft Conversions</div>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">Luxury look. Dependable service. Real craftsmanship.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Clear communication from day one",
                  "Tailored solutions for each roof type",
                  "Built to enhance daily life and resale value",
                  "Respectful team homeowners feel comfortable with",
                ].map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-white/75">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-28 pt-10 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <div className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Contact</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Book your free loft consultation</h2>
              <p className="mt-5 max-w-xl text-white/68 leading-7">
                Ready to unlock more space with a conversion that feels elevated from the very first detail? Start with a consultation and get clear guidance on what is possible in your home.
              </p>
              <div className="mt-8 space-y-4 text-white/75">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/40">Phone</div>
                  <div className="mt-1 text-lg">Add business number</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/40">Email</div>
                  <div className="mt-1 text-lg">Add business email</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/40">Service Area</div>
                  <div className="mt-1 text-lg">Add location / region served</div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#111114] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="grid gap-5">
                <div>
                  <label className="mb-2 block text-sm text-white/60">Full Name</label>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none placeholder:text-white/30 focus:border-white/25"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-white/60">Phone</label>
                    <input
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none placeholder:text-white/30 focus:border-white/25"
                      placeholder="Your number"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-white/60">Email</label>
                    <input
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none placeholder:text-white/30 focus:border-white/25"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/60">Project Type</label>
                  <select className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none focus:border-white/25">
                    <option className="bg-black">Dormer conversion</option>
                    <option className="bg-black">Velux conversion</option>
                    <option className="bg-black">Hip-to-gable conversion</option>
                    <option className="bg-black">Loft bedroom / en suite</option>
                    <option className="bg-black">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/60">Tell us about your space</label>
                  <textarea
                    rows={5}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none placeholder:text-white/30 focus:border-white/25"
                    placeholder="Share a few details about your loft, your goals and your ideal timeline"
                  />
                </div>
                <button className="rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition hover:scale-[1.01]">
                  Request My Free Quote
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/45 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-amber-200/60">Pro Loft Conversions</div>
            <div className="mt-2">Luxury loft transformations with fast, respectful service.</div>
          </div>
          <div>© Pro Loft Conversions. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
