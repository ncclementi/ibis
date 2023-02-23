window.BENCHMARK_DATA = {
  "lastUpdate": 1677190717177,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "382b90fb391b8c8bbf2ae487b8b4d163aefed6bc",
          "message": "fix(pandas): handle casting to arrays with None elements",
          "timestamp": "2023-02-23T17:11:05-05:00",
          "tree_id": "2d5fcea16854a360cabd680e2bf7554dfb25f3d2",
          "url": "https://github.com/ibis-project/ibis/commit/382b90fb391b8c8bbf2ae487b8b4d163aefed6bc"
        },
        "date": 1677190633491,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8550417706707384,
            "unit": "iter/sec",
            "range": "stddev: 0.00559009723978092",
            "extra": "mean: 1.169533506199994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.17825082157726,
            "unit": "iter/sec",
            "range": "stddev: 0.007775762160709264",
            "extra": "mean: 29.258372677418723 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.40174716054555,
            "unit": "iter/sec",
            "range": "stddev: 0.00018424802929624826",
            "extra": "mean: 22.521636285713072 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 69.63764408125895,
            "unit": "iter/sec",
            "range": "stddev: 0.012201840931107183",
            "extra": "mean: 14.360049269230265 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 85.34893714386828,
            "unit": "iter/sec",
            "range": "stddev: 0.0005874227812291211",
            "extra": "mean: 11.716607534483432 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.31352946517025,
            "unit": "iter/sec",
            "range": "stddev: 0.00014427344572019005",
            "extra": "mean: 10.716559600001574 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 108.15773375675018,
            "unit": "iter/sec",
            "range": "stddev: 0.00009752660876929484",
            "extra": "mean: 9.245755853659329 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.86688932482277,
            "unit": "iter/sec",
            "range": "stddev: 0.0006808639928179777",
            "extra": "mean: 29.527364925926307 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15260875355216066,
            "unit": "iter/sec",
            "range": "stddev: 0.05520605008836746",
            "extra": "mean: 6.552704066599998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3956.568529834008,
            "unit": "iter/sec",
            "range": "stddev: 0.000046623256039441985",
            "extra": "mean: 252.74426373753556 usec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 236.19268010173988,
            "unit": "iter/sec",
            "range": "stddev: 0.000247100687546142",
            "extra": "mean: 4.2338314615391575 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.648855161178496,
            "unit": "iter/sec",
            "range": "stddev: 0.0002720361420582505",
            "extra": "mean: 18.993765333331815 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 85.30375135717046,
            "unit": "iter/sec",
            "range": "stddev: 0.0005769745901028657",
            "extra": "mean: 11.722813875007176 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4445.68219748989,
            "unit": "iter/sec",
            "range": "stddev: 0.000018591106694404385",
            "extra": "mean: 224.93735619802456 usec\nrounds: 2041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119380.4825296217,
            "unit": "iter/sec",
            "range": "stddev: 4.0199743203313776e-7",
            "extra": "mean: 8.37657864007939 usec\nrounds: 33558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 984.5542427160012,
            "unit": "iter/sec",
            "range": "stddev: 0.000012712683730345486",
            "extra": "mean: 1.0156880714275223 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 624.126253194133,
            "unit": "iter/sec",
            "range": "stddev: 0.000019059850847490626",
            "extra": "mean: 1.6022399232242395 msec\nrounds: 521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.60682601484077,
            "unit": "iter/sec",
            "range": "stddev: 0.0006344869084011078",
            "extra": "mean: 17.0628588510624 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.75605510989877,
            "unit": "iter/sec",
            "range": "stddev: 0.00006199386289755811",
            "extra": "mean: 7.054372380952145 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 113.26072583618402,
            "unit": "iter/sec",
            "range": "stddev: 0.0005495412489752033",
            "extra": "mean: 8.829185868421519 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.86390889173785,
            "unit": "iter/sec",
            "range": "stddev: 0.00013545012688472962",
            "extra": "mean: 10.653722094116013 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.896252795208101,
            "unit": "iter/sec",
            "range": "stddev: 0.000267336512563683",
            "extra": "mean: 204.23782060000804 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10165.79150914155,
            "unit": "iter/sec",
            "range": "stddev: 0.000001927173147817802",
            "extra": "mean: 98.36912345691465 usec\nrounds: 5103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8554324313369888,
            "unit": "iter/sec",
            "range": "stddev: 0.004086254298632189",
            "extra": "mean: 1.1689994012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4047.9275575707975,
            "unit": "iter/sec",
            "range": "stddev: 0.00004990684760637328",
            "extra": "mean: 247.0399941149417 usec\nrounds: 1869"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.32917540000771,
            "unit": "iter/sec",
            "range": "stddev: 0.0005595929259477109",
            "extra": "mean: 11.450926857141853 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 244.61003586035247,
            "unit": "iter/sec",
            "range": "stddev: 0.00022413283361421977",
            "extra": "mean: 4.088139705645188 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 97.23445176724411,
            "unit": "iter/sec",
            "range": "stddev: 0.013513961404515901",
            "extra": "mean: 10.284420612498124 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6439.283252718967,
            "unit": "iter/sec",
            "range": "stddev: 0.000021482931587074855",
            "extra": "mean: 155.29678704190457 usec\nrounds: 3766"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57900.3920213904,
            "unit": "iter/sec",
            "range": "stddev: 4.777986377431115e-7",
            "extra": "mean: 17.271040231136357 usec\nrounds: 12627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 440.9102271149073,
            "unit": "iter/sec",
            "range": "stddev: 0.00003383945040292815",
            "extra": "mean: 2.2680353924731853 msec\nrounds: 372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 157.32009409392495,
            "unit": "iter/sec",
            "range": "stddev: 0.00006181571084041437",
            "extra": "mean: 6.356467085526718 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 554.6159976809113,
            "unit": "iter/sec",
            "range": "stddev: 0.00003856000674518498",
            "extra": "mean: 1.8030493245442456 msec\nrounds: 493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 82.80385136000706,
            "unit": "iter/sec",
            "range": "stddev: 0.0006352695750962016",
            "extra": "mean: 12.076732948716248 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.545637686258234,
            "unit": "iter/sec",
            "range": "stddev: 0.0005692709376582262",
            "extra": "mean: 73.824505214286 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5851458125499813,
            "unit": "iter/sec",
            "range": "stddev: 0.0030502184027014754",
            "extra": "mean: 1.7089757433999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 113.8302573695264,
            "unit": "iter/sec",
            "range": "stddev: 0.0006086048757321865",
            "extra": "mean: 8.785010445453942 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 133.81493284496702,
            "unit": "iter/sec",
            "range": "stddev: 0.0001293156829385019",
            "extra": "mean: 7.473007524194349 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4482.65180598875,
            "unit": "iter/sec",
            "range": "stddev: 0.000050565219000519774",
            "extra": "mean: 223.0822386570414 usec\nrounds: 2204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5377164.333513548,
            "unit": "iter/sec",
            "range": "stddev: 4.831286592209912e-9",
            "extra": "mean: 185.97162704647087 nsec\nrounds: 54645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.6543576895628,
            "unit": "iter/sec",
            "range": "stddev: 0.000311085225857575",
            "extra": "mean: 13.955885339624784 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 67.50726444940183,
            "unit": "iter/sec",
            "range": "stddev: 0.014254471207242582",
            "extra": "mean: 14.813220594200228 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 238.77684296863612,
            "unit": "iter/sec",
            "range": "stddev: 0.00026818120991592946",
            "extra": "mean: 4.188010811967022 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1445005.4282555,
            "unit": "iter/sec",
            "range": "stddev: 1.278483402771294e-7",
            "extra": "mean: 692.0389227930182 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10841.337941228723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016706662000888901",
            "extra": "mean: 92.23953772320681 usec\nrounds: 5103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.13135321361858,
            "unit": "iter/sec",
            "range": "stddev: 0.00021968239979750813",
            "extra": "mean: 109.51279362500088 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9349.3165956245,
            "unit": "iter/sec",
            "range": "stddev: 0.000012739874425433182",
            "extra": "mean: 106.95968948874854 usec\nrounds: 4148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 98.45567277886342,
            "unit": "iter/sec",
            "range": "stddev: 0.00015222025484811852",
            "extra": "mean: 10.15685507777751 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 274.68731869868196,
            "unit": "iter/sec",
            "range": "stddev: 0.00004038110429100277",
            "extra": "mean: 3.6405029716604758 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 119.7868725484688,
            "unit": "iter/sec",
            "range": "stddev: 0.00003156438520135481",
            "extra": "mean: 8.348160184208622 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 248.9210332731316,
            "unit": "iter/sec",
            "range": "stddev: 0.0002043869160259158",
            "extra": "mean: 4.017338297413935 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4465.591060531088,
            "unit": "iter/sec",
            "range": "stddev: 0.00005487691277282567",
            "extra": "mean: 223.93452209237248 usec\nrounds: 2829"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2118979046463143,
            "unit": "iter/sec",
            "range": "stddev: 0.003840466242980333",
            "extra": "mean: 452.1004327999947 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 112.86812451730609,
            "unit": "iter/sec",
            "range": "stddev: 0.0006246929667628924",
            "extra": "mean: 8.859897373830021 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4565000.753178205,
            "unit": "iter/sec",
            "range": "stddev: 3.233322298533744e-8",
            "extra": "mean: 219.058014241019 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 329.3873536934634,
            "unit": "iter/sec",
            "range": "stddev: 0.00027303487073243674",
            "extra": "mean: 3.0359392635657367 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.78698708192481,
            "unit": "iter/sec",
            "range": "stddev: 0.0007073345856634329",
            "extra": "mean: 25.133845846153527 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.164802454243983,
            "unit": "iter/sec",
            "range": "stddev: 0.00043149135909635784",
            "extra": "mean: 39.73804291999727 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 369240.7224060832,
            "unit": "iter/sec",
            "range": "stddev: 4.5607751832818216e-7",
            "extra": "mean: 2.7082603280691804 usec\nrounds: 1767"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.87386621838941,
            "unit": "iter/sec",
            "range": "stddev: 0.00005408151652296927",
            "extra": "mean: 11.510941593023295 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.806494119054,
            "unit": "iter/sec",
            "range": "stddev: 0.00039321219358833854",
            "extra": "mean: 4.508434272728069 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1583724.82976021,
            "unit": "iter/sec",
            "range": "stddev: 1.0303931720108727e-7",
            "extra": "mean: 631.422821192624 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 569328.7026166206,
            "unit": "iter/sec",
            "range": "stddev: 2.7003045236263946e-7",
            "extra": "mean: 1.7564545672895548 usec\nrounds: 21009"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 98.19134675935373,
            "unit": "iter/sec",
            "range": "stddev: 0.013078325639955719",
            "extra": "mean: 10.184196805557509 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.559785085847977,
            "unit": "iter/sec",
            "range": "stddev: 0.0012535594440168704",
            "extra": "mean: 641.1139644000059 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 265.82865595842384,
            "unit": "iter/sec",
            "range": "stddev: 0.000012925343432272212",
            "extra": "mean: 3.7618216756751846 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3951.528422068194,
            "unit": "iter/sec",
            "range": "stddev: 0.00005797452701115342",
            "extra": "mean: 253.06663477738803 usec\nrounds: 1662"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 107.0092952380858,
            "unit": "iter/sec",
            "range": "stddev: 0.0006200150748669455",
            "extra": "mean: 9.344982580953294 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 244.02763575943013,
            "unit": "iter/sec",
            "range": "stddev: 0.0002659426905702519",
            "extra": "mean: 4.097896522612834 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.93369038831548,
            "unit": "iter/sec",
            "range": "stddev: 0.000031357795738345176",
            "extra": "mean: 5.7825632342347015 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4417962.336571043,
            "unit": "iter/sec",
            "range": "stddev: 1.2361304255653418e-8",
            "extra": "mean: 226.34869286351045 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1437136.4847298723,
            "unit": "iter/sec",
            "range": "stddev: 1.7323064385278936e-7",
            "extra": "mean: 695.8281350625946 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 83.56642785057295,
            "unit": "iter/sec",
            "range": "stddev: 0.0007244666660877012",
            "extra": "mean: 11.966528015151287 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.73045782431558,
            "unit": "iter/sec",
            "range": "stddev: 0.00026475525704737143",
            "extra": "mean: 14.76440632652855 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1470803.9953771995,
            "unit": "iter/sec",
            "range": "stddev: 1.3723384419139402e-7",
            "extra": "mean: 679.9002471730041 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11865707.196167223,
            "unit": "iter/sec",
            "range": "stddev: 3.777037368822513e-9",
            "extra": "mean: 84.2764770330865 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3294.0951807083206,
            "unit": "iter/sec",
            "range": "stddev: 0.0033533568558490943",
            "extra": "mean: 303.5734989858346 usec\nrounds: 1972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4543.8574713548915,
            "unit": "iter/sec",
            "range": "stddev: 0.000049193182174459554",
            "extra": "mean: 220.07732555524439 usec\nrounds: 2657"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 104.54060317719608,
            "unit": "iter/sec",
            "range": "stddev: 0.0006374881178197703",
            "extra": "mean: 9.565661280000484 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7392393553570145,
            "unit": "iter/sec",
            "range": "stddev: 0.004265515060468686",
            "extra": "mean: 1.3527418322000073 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 252.3380032868422,
            "unit": "iter/sec",
            "range": "stddev: 0.00019416563502586335",
            "extra": "mean: 3.962938546609889 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1451.3280041411012,
            "unit": "iter/sec",
            "range": "stddev: 0.000004604443781656129",
            "extra": "mean: 689.0241193904351 usec\nrounds: 1181"
          }
        ]
      }
    ]
  }
}