import Link from "next/link";
import { BlogFigure } from "@/components/BlogFigure";
import { Cite } from "@/components/Cite";
import { Prose } from "@/components/Prose";

export function WhyWeArchive() {
  return (
    <Prose as="article">
      <p className="machine mb-3 text-[13px] text-ink-soft">Blog week 1</p>
      <h1>Why we archive</h1>
      <p className="display text-[21px] leading-snug text-ink-soft">
        Taking paper, performance, and memory into a digitized world.
      </p>
      <p>
        When I think about digital humanities, I think about transforming
        meaning: taking things we have traditionally understood through paper,
        performance, and memory, and carrying them into a digitized world.
        There is an entire humanities discipline built around this, and I
        think it exists because adopting a digital world comes with a
        responsibility. We need to learn how to preserve memory in ways people
        can actually understand. That is a real question, and the field itself
        cannot even agree on its own definition, which is exactly what
        Callaway&apos;s topic modeling piece explores by computationally
        analyzing the whole &quot;what is DH?&quot; genre of essays.{" "}
        <Cite id="callaway" /> I liked that the answer to &quot;what is
        digital humanities&quot; was itself found through a digital humanities
        method.
      </p>
      <p>
        So why do we archive? For me, it comes down to understanding where
        things come from and how they made us into the people we are today.
        Archiving is preserving meaning, and preserving meaning is the essence
        of what digital humanities really is. Milligan&apos;s chapter on
        &quot;What Is an Archive?&quot; pushed me on this, because she shows
        that archives were never neutral storage. <Cite id="milligan" /> What
        gets kept, and who decides, shapes what a culture is allowed to
        remember. That paired nicely with Callaway for me: one reading
        questions what the field is, the other questions what the archive is,
        and both refuse the easy answer.
      </p>
      <p>
        I have bumped into these questions in my own work. I did a project on
        A.K. Ramanujan, working through his translations and poems, using
        models to see how meaning is preserved and how it changes over time as
        it crosses languages. None of that would have been possible without
        the digital humanities projects that preserved his work in the first
        place.
      </p>
      <p>
        <a
          href="https://translation-final.vercel.app"
          className="underline"
        >
          translation-final.vercel.app
        </a>
      </p>
      <BlogFigure
        src="/blogs/ramanujan-paths.png"
        alt="Line chart titled two ways of telling the same poem. Colored paths plot emotional weight against running word count for an original and later translations. Where the paths split, a translator made a different choice."
        caption="This is a graphical representation of emotional weight through poems and many different translations, to see how meaning drifts through time."
      />
      <p>
        <a
          href="https://github.com/gyanbhambhani/translation-final"
          className="underline"
        >
          The translation project repository
        </a>
      </p>
      <p>
        The other place I feel this personally is music. I have been around
        music my whole life, specifically mariachi music, and this is where
        the humanities really transcended cultures for me. As someone of
        Indian descent learning music from a completely different culture and
        language, I saw firsthand that the way we learned was not through
        written notation. We learned from older musicians who learned from
        their teachers, and so on down the line. We learned by ear, for one
        purpose: to memorize. Digital humanities could help archive this
        knowledge and make it more permanent, preserving traditions like this
        one for cultures of all kinds.
      </p>
      <p>
        An example of a piece we played in the district mariachi program:{" "}
        <a
          href="https://www.youtube.com/watch?v=1nA6f6vDxtg"
          className="underline"
        >
          Canción Del Mariachi, Antonio Banderas and Los Lobos, from Desperado
        </a>
        . I personally played 3 out of the 4 instruments throughout my 8 years
        of playing for the district, so I was able to get an enhanced
        perspective of a culture I was originally foreign to.
      </p>
      <p>
        The DH project that has inspired me most recently is a network
        analysis visualizing the character relationships in Les Misérables. I
        used it as inspiration in DigHum 101, where I took{" "}
        <a href="https://www.music21.org/" className="underline">
          music21
        </a>
        , an open-source Python library out of MIT, to represent music
        graphically as a network in a way that finally made sense to me.
        Seeing a score as a web of relationships instead of a linear document
        changed how I think about what a &quot;text&quot; even is.
      </p>
      <BlogFigure
        src="/blogs/bach-network.png"
        alt="Circular network of pitch classes from a Bach chorale. Node size is how central that pitch is. Color groups pitches that move together. The score is drawn as a web of relationships."
        caption="Just an example of the outputs of the graphical representations of music I had been around my whole life."
      />
      <p>
        <a
          href="https://github.com/gyanbhambhani/dighum101-ind-project-music-network/blob/main/notebook.ipynb"
          className="underline"
        >
          The music network notebook
        </a>
      </p>
      <p>
        In this class, I want to build a more abstract understanding of what
        an archive really is and why preserving meaning matters. I also want
        to push back on the misconception that digitizing our world is bad for
        us. If we move these archives into the digital world thoughtfully, we
        do not just preserve the humanities and advance them forward. We give
        meaning back to the works and archives that made humans who we are
        today.
      </p>
    </Prose>
  );
}

export function ManInsideTheCabinet() {
  return (
    <Prose as="article">
      <p className="machine mb-3 text-[13px] text-ink-soft">Blog week 4</p>
      <h1>The man inside the cabinet</h1>
      <p className="display text-[21px] leading-snug text-ink-soft">
        What 9 years of trading taught me about building a machine that trades
        without me
      </p>
      <p>
        I was twelve the first time I bought stock. Ten shares of Apple, held
        till this day. It started because I wanted an iPhone so badly, but my
        father had something else in mind. At the time, the iPhone was almost
        $1,000. Instead, he offered to buy me the equivalent in stock. Today,
        I can buy way more than just 1 iPhone, because of my father&apos;s
        guidance. And I have been in the markets every year since. That is a
        decade of being personally and expensively wrong before I ever wrote a
        line of code that traded on my behalf.
      </p>
      <p>
        That history is the lens I bring to this project. I am building an AI
        quantitative fund: models that train on years of market data, generate
        signals, size positions, and execute with no human hand on the button.
        The obvious way to frame this is as an engineering problem. I frame it
        as a reading problem, because nine years of screen time taught me that
        price data never announces what it means.
      </p>

      <h2>Poe got there first</h2>
      <p>
        The reading that reorganized this project for me was Poe&apos;s 1836
        essay &quot;Maelzel&apos;s Chess-Player.&quot; <Cite id="poe" /> Poe
        never opens the cabinet. He works entirely from the outside: the
        timing of the automaton&apos;s moves, the choreography of how Maelzel
        wheels the box across the stage, the way The Turk occasionally loses.
        From seventeen numbered observations he reasons his way to the man
        folded inside.
      </p>
      <p>
        His sharpest move is treating the machine&apos;s imperfection as the
        tell. A true machine would play flawlessly every time. This one
        blundered, so something human was in there.
      </p>
      <p>
        I occupy Poe&apos;s seat with respect to my own system. I wrote it,
        and I still cannot see inside it. What I have are surface traces:
        which sectors it crowds into, when its confidence spikes, the trades
        it quietly refuses to place. When a fund says &quot;the model
        decided,&quot; it is running Maelzel&apos;s stagecraft with better
        hardware. Somebody chose the training window. Somebody chose what
        counts as a signal.
      </p>
      <BlogFigure
        src="/blogs/pipeline.png"
        alt="Five boxes in a row for a so-called autonomous trading system: raw market data, feature construction, model training, backtest and validation, live execution. Three boxes are marked as my judgment: choosing the data window, deciding what counts as a signal, and setting the bar for whether it worked."
        caption="My pipeline, honestly labeled. Five stages of an autonomous trading system. Three of them are my judgment wearing a lab coat."
      />

      <h2>The butter problem</h2>
      <p>
        The second reading that stuck is boyd and Crawford&apos;s
        &quot;Critical Questions for Big Data.&quot;{" "}
        <Cite id="boyd-crawford" /> Their warning about apophenia, seeing
        patterns where none exist because huge datasets offer connections
        radiating in every direction, arrives with an example aimed straight
        at my industry: butter production in Bangladesh explaining almost all
        of the variance in the S&amp;P 500.
      </p>
      <p>
        For most readers that example is a punchline. For me it is a
        description of last Tuesday.
      </p>
      <p>
        Here is the version I ran myself. I generated a thousand strategies
        out of pure random noise, none with any real edge, and tracked the
        best score I could find as I searched harder.
      </p>
      <BlogFigure
        src="/blogs/noise-search.png"
        alt="Line chart of the best result found while searching random trading rules with no real edge. The line climbs as more variants are tested. After 400 variants the best result averages 3.00, while the true edge of every rule is zero."
        caption="Search four hundred variants of nothing and the winner looks like a career."
      />
      <p>
        Search long enough and noise hands you a number worth putting in a
        pitch deck. My working question stopped being &quot;which variant is
        best&quot; and became &quot;how surprised should I be that my best one
        looks this good.&quot; That single reframe is why I now deflate every
        result by how many things I tried.
      </p>
      <BlogFigure
        src="/blogs/history-gap.png"
        alt="Line chart of cumulative return over 500 trading days. A dashed line for a historical test rises steeply. A solid line for live money stays lower. The gap between them is shaded and labeled as everything I learned that history could not teach me."
        caption="The gap between history and money is where I have done all my actual learning."
      />

      <h2>What I want people to take from this</h2>
      <p>
        For a general reader: market data is a manufactured artifact. Adjusted
        closes, delisted companies quietly missing from the file, timestamps
        that round away the moment that mattered. Every clean dataset is
        somebody&apos;s editorial decision.
      </p>
      <p>
        For a scholarly reader: quantitative finance is an unusually honest
        laboratory for critical data studies, because it keeps score in
        public. A flash crash is an epistemology seminar with real casualties.
      </p>

      <h2>What I am still chasing</h2>
      <p>
        Three questions I cannot close yet. How do I tell a model that the
        past has stopped applying, given that the signal for regime change
        only arrives after the money is gone? What does the explanation owe an
        investor when the honest answer is a weight matrix? And who is
        entitled to this kind of edge when the compute required to find it
        costs more than most people will ever invest?
      </p>
      <p>
        I still cannot open the cabinet. I have gotten better at describing
        what must be inside.
      </p>
    </Prose>
  );
}

export function EverythingTheCandleAte() {
  return (
    <Prose as="article">
      <p className="machine mb-3 text-[13px] text-ink-soft">Blog week 2</p>
      <h1>Everything the candle ate</h1>
      <p className="display text-[21px] leading-snug text-ink-soft">
        Why I am grounding a market archive in emotion, when the record was
        built to strip it out
      </p>
      <p>
        My worst trade felt like sitting very still. I watched a position move
        against me for about forty minutes and did nothing, because doing
        something would have meant agreeing it was real. Ticker: BABA
        (Alibaba). Trade was made Nov 2019.
      </p>
      <p>
        Months later I pulled that day to study it. My forty minutes came back
        as one row in a CSV. Open, high, low, close, volume. Five numbers, and
        none of them were the part that mattered. The emotions I felt. The
        bandwagon feeling that I had that I found out wasn&apos;t really true.
        None of the corpus captured the feelings of millions of traders in the
        middle of that position at 6:30 AM on that Monday morning.
      </p>
      <p>
        So that is my item. I am grounding this project in the daily bar, the
        smallest unit of memory that markets bother to keep. One trading day
        gets compressed into four prices. The high is the most hopeful anyone
        was all day. The low is the most frightened. The close is usually the
        only one my models ever read.
      </p>
      <BlogFigure
        src="/blogs/qqq-bars.png"
        alt="Daily price bars for Invesco QQQ from late spring into August. One down day in June is circled, with a note that the bar closed above the middle of that day's range."
        caption="The archive keeps the third panel. My models are trained on the third panel."
      />

      <h2>The silence is upstream of me</h2>
      <p>
        I picked emotion because it is the causal thing and also the first
        thing thrown away.
      </p>
      <p>
        Trouillot is the reading that made this feel less like a complaint and
        more like a diagnosis. <Cite id="trouillot" /> He argues that silences
        enter history at four moments, and the earliest is fact creation, the
        making of sources. By the time anyone is arguing about interpretation,
        the losses have already happened at the point where the record got
        written.
      </p>
      <p>
        That is exactly my situation. The leftover price is the source. The
        fear that produced it was never made into a source at all. No amount
        of clever modeling recovers it later, because there is no later. It
        was gone at the moment of the print.
      </p>

      <h2>A price chart is the most innocent-looking object I know</h2>
      <p>
        The second reading I keep coming back to is Johanna Drucker&apos;s
        &quot;Humanities Approaches to Graphical Display&quot; and her
        distinction between data, meaning the given, and capta, meaning the
        taken. <Cite id="drucker" /> Her argument is that visualizations
        borrowed from the sciences smuggle in a claim of neutrality they have
        not earned.
      </p>
      <p>
        A price series is the purest example I have ever encountered. It looks
        observed. It is manufactured. Somebody decided the bar is one minute
        instead of one second, that the delisted companies drop out of the
        file, that the close is the summary. Every one of those decisions
        removes a person.
      </p>
      <p>
        Stock Market Crash, Flash Crash May 6, 2010. The SEC and CFTC report
        on this day runs 104 pages and contains no sound. The sound is the
        finding. That report is{" "}
        <Link href="/items/flash-crash-report" className="underline">
          item four in this archive
        </Link>
        .
      </p>

      <h2>Ways of knowing I can actually use</h2>
      <p>
        Four kinds of evidence, none of them numeric, all of them documented
        somewhere:
      </p>
      <ul>
        <li>
          <em>Testimony under pressure.</em> FOMC transcripts come out on a
          five-year delay, which means we get to read what people said while
          they were scared, after we already know how it ended.
        </li>
        <li>
          <em>Vernacular records.</em> Forum loss posts are confessional
          writing. Nobody filed them as records, which is precisely the
          argument for treating them as records.
        </li>
        <li>
          <em>Recorded sound.</em> Pit audio, earnings call voices, hold music
          before a margin call.
        </li>
        <li>
          <em>My own body.</em> Nine years of being expensively wrong is a
          small primary source, and I am the only person who can deposit it.
        </li>
      </ul>

      <h2>Where this fights the documentary tradition</h2>
      <p>
        Finance already has a strong documentary regime. The 10-K, the audited
        statement, the timestamped leftover. Those count as the record because
        they are legally binding and machine readable, which is a definition
        of evidence shaped almost entirely by what a computer can parse and a
        court can subpoena. Emotion fails both tests, so it has no custodian.
      </p>
      <p>
        My archive puts an affect attribution field next to the price fields,
        cites who said the feeling and when, and refuses to let the number
        stand alone.
      </p>
      <BlogFigure
        src="/blogs/lehman-schema.png"
        alt="Screenshot of this archive's Lehman Brothers item page, showing the event, what a person said, what got saved, and the control that strips the reasoning."
        caption="The schema is where the argument actually lives. Taken from this archive."
      />
      <p>
        The live version of that record is{" "}
        <Link href="/items/lehman-q2-call" className="underline">
          the Lehman Brothers earnings call
        </Link>
        .
      </p>
      <p>
        This complements more than it attacks. The leftover price tells me
        what happened with precision I could never reconstruct. It just cannot
        tell me why, and finance has spent forty years treating that gap as
        noise to be denoised rather than a silence to be filled.
      </p>
      <p>
        Last time I wrote that I could not open the cabinet. I have stopped
        trying. I am building the archive of what the man inside was feeling
        when he moved.
      </p>
    </Prose>
  );
}
