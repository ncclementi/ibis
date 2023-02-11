window.BENCHMARK_DATA = {
  "lastUpdate": 1676075170118,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "ced316f0b00f23d0afee8e47eaa159cd510e6414",
          "message": "chore(flake/nixpkgs): `f30a2734` -> `3441ad51`",
          "timestamp": "2023-02-11T00:19:34Z",
          "tree_id": "c57e7f0b72ae9b307a0e44a819a154d3a2a9f98d",
          "url": "https://github.com/ibis-project/ibis/commit/ced316f0b00f23d0afee8e47eaa159cd510e6414"
        },
        "date": 1676075085642,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5939.270894585409,
            "unit": "iter/sec",
            "range": "stddev: 0.000049482703417974826",
            "extra": "mean: 168.3708350315624 usec\nrounds: 491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 160.70577987876464,
            "unit": "iter/sec",
            "range": "stddev: 0.0005967463294850055",
            "extra": "mean: 6.222551552000141 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.49709207170055,
            "unit": "iter/sec",
            "range": "stddev: 0.00019589361669503986",
            "extra": "mean: 11.561082298247253 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.59620045741805,
            "unit": "iter/sec",
            "range": "stddev: 0.00006000377343397918",
            "extra": "mean: 10.571249111111438 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 249.04316749534698,
            "unit": "iter/sec",
            "range": "stddev: 0.0001241701624004387",
            "extra": "mean: 4.015368139014228 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5101.038392850392,
            "unit": "iter/sec",
            "range": "stddev: 0.00004060276562300068",
            "extra": "mean: 196.0385166678217 usec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5806.475760506092,
            "unit": "iter/sec",
            "range": "stddev: 0.00006069120788757333",
            "extra": "mean: 172.22150599537505 usec\nrounds: 417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.55223379995219,
            "unit": "iter/sec",
            "range": "stddev: 0.0004186996386054243",
            "extra": "mean: 10.5761647272738 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 250.06186663758132,
            "unit": "iter/sec",
            "range": "stddev: 0.0001949519827928655",
            "extra": "mean: 3.9990103786968687 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57344.49595506138,
            "unit": "iter/sec",
            "range": "stddev: 4.929450674077899e-7",
            "extra": "mean: 17.43846525015514 usec\nrounds: 12331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3512.4341837515562,
            "unit": "iter/sec",
            "range": "stddev: 0.0020545835682328605",
            "extra": "mean: 284.7028435795262 usec\nrounds: 1285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18790.09863599489,
            "unit": "iter/sec",
            "range": "stddev: 0.000013213019894018567",
            "extra": "mean: 53.21951839488321 usec\nrounds: 5409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8724692085436127,
            "unit": "iter/sec",
            "range": "stddev: 0.006441814062280707",
            "extra": "mean: 1.1461722547999955 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.442231277036512,
            "unit": "iter/sec",
            "range": "stddev: 0.02541243628967011",
            "extra": "mean: 118.45209722222056 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 141.92474812726383,
            "unit": "iter/sec",
            "range": "stddev: 0.00012778217107735641",
            "extra": "mean: 7.045987491225285 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8702336282526371,
            "unit": "iter/sec",
            "range": "stddev: 0.002761654545639415",
            "extra": "mean: 1.1491167055999938 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1545447.1978339197,
            "unit": "iter/sec",
            "range": "stddev: 9.3680231524144e-8",
            "extra": "mean: 647.0618998834693 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 223.02600703373193,
            "unit": "iter/sec",
            "range": "stddev: 0.0004045311183701316",
            "extra": "mean: 4.483782018519272 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.19573555303059,
            "unit": "iter/sec",
            "range": "stddev: 0.014559768192838747",
            "extra": "mean: 29.24341248484638 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.2835515226292,
            "unit": "iter/sec",
            "range": "stddev: 0.000624923882425309",
            "extra": "mean: 11.200271303573166 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.860661969742777,
            "unit": "iter/sec",
            "range": "stddev: 0.00018096082448745374",
            "extra": "mean: 205.7332944000052 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1531331846046426,
            "unit": "iter/sec",
            "range": "stddev: 0.12031400153583194",
            "extra": "mean: 6.530263199200016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.576670802632321,
            "unit": "iter/sec",
            "range": "stddev: 0.038815628636292274",
            "extra": "mean: 1.7340916089999951 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 250.9862301150016,
            "unit": "iter/sec",
            "range": "stddev: 0.00018886202759698756",
            "extra": "mean: 3.9842823231449835 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.80300490810868,
            "unit": "iter/sec",
            "range": "stddev: 0.00023012183499375796",
            "extra": "mean: 15.196874388889395 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.486440317713146,
            "unit": "iter/sec",
            "range": "stddev: 0.00022997093293697",
            "extra": "mean: 74.14855042858092 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 141.91747045179608,
            "unit": "iter/sec",
            "range": "stddev: 0.00012098546272430289",
            "extra": "mean: 7.046348816791106 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 159.2454038907859,
            "unit": "iter/sec",
            "range": "stddev: 0.0006152042241112934",
            "extra": "mean: 6.2796160866647215 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.68324835242224,
            "unit": "iter/sec",
            "range": "stddev: 0.0002019876992087721",
            "extra": "mean: 10.237169800006996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 625.677933627429,
            "unit": "iter/sec",
            "range": "stddev: 0.00002712092969449826",
            "extra": "mean: 1.5982663703710984 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 256.9872967800099,
            "unit": "iter/sec",
            "range": "stddev: 0.00018761721480330297",
            "extra": "mean: 3.891242923404245 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.20485138677979,
            "unit": "iter/sec",
            "range": "stddev: 0.0003452857269635516",
            "extra": "mean: 17.792058431369053 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121523.94411371677,
            "unit": "iter/sec",
            "range": "stddev: 3.2670146396866507e-7",
            "extra": "mean: 8.228831011806562 usec\nrounds: 33671"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 109.72124745485263,
            "unit": "iter/sec",
            "range": "stddev: 0.01003397998636608",
            "extra": "mean: 9.11400501905042 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10076.177615997707,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036817241887873484",
            "extra": "mean: 99.24398299731476 usec\nrounds: 4352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.81842586107756,
            "unit": "iter/sec",
            "range": "stddev: 0.0006529473076976536",
            "extra": "mean: 11.133572988093814 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4462196.661980489,
            "unit": "iter/sec",
            "range": "stddev: 1.2980606193115319e-8",
            "extra": "mean: 224.10486936223498 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.9561772661699,
            "unit": "iter/sec",
            "range": "stddev: 0.0001341500834697592",
            "extra": "mean: 3.7742090421066847 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 143.86038541871582,
            "unit": "iter/sec",
            "range": "stddev: 0.00003131791777165671",
            "extra": "mean: 6.951183934961868 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 247.05547626154603,
            "unit": "iter/sec",
            "range": "stddev: 0.0002018697982932308",
            "extra": "mean: 4.047673887387734 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.478451196824075,
            "unit": "iter/sec",
            "range": "stddev: 0.0007492408957911447",
            "extra": "mean: 21.988435702705583 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 143.0636215656801,
            "unit": "iter/sec",
            "range": "stddev: 0.011065863754031959",
            "extra": "mean: 6.989897145452192 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.0020098485415,
            "unit": "iter/sec",
            "range": "stddev: 0.0009026765152570759",
            "extra": "mean: 11.363376833336876 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 241.2320370842278,
            "unit": "iter/sec",
            "range": "stddev: 0.00021653641416874376",
            "extra": "mean: 4.145386376067632 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5469128.9389877245,
            "unit": "iter/sec",
            "range": "stddev: 4.580190079692365e-9",
            "extra": "mean: 182.8444732526877 nsec\nrounds: 53764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10749.910099822624,
            "unit": "iter/sec",
            "range": "stddev: 0.000001568144896119738",
            "extra": "mean: 93.02403375601254 usec\nrounds: 4888"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 366021.9267380694,
            "unit": "iter/sec",
            "range": "stddev: 9.187195181797484e-8",
            "extra": "mean: 2.73207676084284 usec\nrounds: 1889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5249.170475887321,
            "unit": "iter/sec",
            "range": "stddev: 0.00004738375943091418",
            "extra": "mean: 190.50629134519767 usec\nrounds: 2334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.259409754994916,
            "unit": "iter/sec",
            "range": "stddev: 0.0014619653684324525",
            "extra": "mean: 442.5934684000026 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.0393036114956,
            "unit": "iter/sec",
            "range": "stddev: 0.0006391246884953289",
            "extra": "mean: 6.942549532849804 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5208.852770202645,
            "unit": "iter/sec",
            "range": "stddev: 0.000052900310991362686",
            "extra": "mean: 191.9808533887772 usec\nrounds: 2892"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 361.5210895000114,
            "unit": "iter/sec",
            "range": "stddev: 0.006600577864651542",
            "extra": "mean: 2.7660903583329364 msec\nrounds: 360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.31808300235485,
            "unit": "iter/sec",
            "range": "stddev: 0.0006652027368575542",
            "extra": "mean: 28.314107533337086 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 6078.16255471899,
            "unit": "iter/sec",
            "range": "stddev: 0.000044868120994651924",
            "extra": "mean: 164.52340505826317 usec\nrounds: 2333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 275.27178918482076,
            "unit": "iter/sec",
            "range": "stddev: 0.00004885493689873783",
            "extra": "mean: 3.632773278225718 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.37786948601563,
            "unit": "iter/sec",
            "range": "stddev: 0.0006327455983414931",
            "extra": "mean: 10.595704326088589 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9636.071098296115,
            "unit": "iter/sec",
            "range": "stddev: 0.000032208136357652404",
            "extra": "mean: 103.77673533114795 usec\nrounds: 4806"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7523735316649216,
            "unit": "iter/sec",
            "range": "stddev: 0.004350223397116122",
            "extra": "mean: 1.3291270331999954 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.366872652759888,
            "unit": "iter/sec",
            "range": "stddev: 0.0006840847887974299",
            "extra": "mean: 37.92637880000257 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 510.81172647117756,
            "unit": "iter/sec",
            "range": "stddev: 0.000020890659673636132",
            "extra": "mean: 1.9576684484286693 msec\nrounds: 446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 159.80896096787228,
            "unit": "iter/sec",
            "range": "stddev: 0.0006880467025409087",
            "extra": "mean: 6.2574713829785695 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1518974.1929365587,
            "unit": "iter/sec",
            "range": "stddev: 1.1964725124131992e-7",
            "extra": "mean: 658.3390321245346 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.60863610670515,
            "unit": "iter/sec",
            "range": "stddev: 0.0003763762724210409",
            "extra": "mean: 22.93123769230294 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 128.9174868944495,
            "unit": "iter/sec",
            "range": "stddev: 0.01189828948487169",
            "extra": "mean: 7.756899580417237 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 595664.8752409107,
            "unit": "iter/sec",
            "range": "stddev: 1.591619362879658e-7",
            "extra": "mean: 1.6787963191476751 usec\nrounds: 23311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.28146345495759,
            "unit": "iter/sec",
            "range": "stddev: 0.0007846825383955508",
            "extra": "mean: 10.955126727273006 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5982744093527248,
            "unit": "iter/sec",
            "range": "stddev: 0.002292010190531378",
            "extra": "mean: 625.6747865999955 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1589867.4716535998,
            "unit": "iter/sec",
            "range": "stddev: 1.290521633275552e-7",
            "extra": "mean: 628.9832440938699 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1470.214325551379,
            "unit": "iter/sec",
            "range": "stddev: 0.00003370621472031478",
            "extra": "mean: 680.1729398364873 usec\nrounds: 1097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.93939619638167,
            "unit": "iter/sec",
            "range": "stddev: 0.0007291926852868707",
            "extra": "mean: 12.204141675676135 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2004818.006342917,
            "unit": "iter/sec",
            "range": "stddev: 2.994899910808276e-8",
            "extra": "mean: 498.7983930891639 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.54847266949102,
            "unit": "iter/sec",
            "range": "stddev: 0.0003103039015555678",
            "extra": "mean: 14.804183728815241 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5996.510002863713,
            "unit": "iter/sec",
            "range": "stddev: 0.000048304833499899535",
            "extra": "mean: 166.76366745364166 usec\nrounds: 2541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 158.58282497347037,
            "unit": "iter/sec",
            "range": "stddev: 0.0006858573378571803",
            "extra": "mean: 6.305853109674972 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.33160188701498,
            "unit": "iter/sec",
            "range": "stddev: 0.00032439749416282023",
            "extra": "mean: 9.868589673683465 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 252.62332252703246,
            "unit": "iter/sec",
            "range": "stddev: 0.00021043614126785962",
            "extra": "mean: 3.958462702480659 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 137.28813303049913,
            "unit": "iter/sec",
            "range": "stddev: 0.0120720929854847",
            "extra": "mean: 7.283950753251528 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4711837.621170324,
            "unit": "iter/sec",
            "range": "stddev: 1.086549128382299e-8",
            "extra": "mean: 212.23142230300013 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10820591.441897243,
            "unit": "iter/sec",
            "range": "stddev: 3.11413336170076e-9",
            "extra": "mean: 92.41639011794868 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 330.2939555625468,
            "unit": "iter/sec",
            "range": "stddev: 0.00003375904861555451",
            "extra": "mean: 3.0276061161846872 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.36035472888176,
            "unit": "iter/sec",
            "range": "stddev: 0.00006707658045622221",
            "extra": "mean: 13.63134084746053 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 995.944569874238,
            "unit": "iter/sec",
            "range": "stddev: 0.000011745562333724485",
            "extra": "mean: 1.0040719436085426 msec\nrounds: 266"
          }
        ]
      }
    ]
  }
}