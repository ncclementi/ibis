window.BENCHMARK_DATA = {
  "lastUpdate": 1678313288274,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "nicholas.b.crews@gmail.com",
            "name": "Nick Crews",
            "username": "NickCrews"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "c5081cf24aa923449e5f6d478ab4e34f0a782eac",
          "message": "refactor(pyspark): remove another private function\n\nSimilar to\nhttps://github.com/ibis-project/ibis/pull/5704",
          "timestamp": "2023-03-08T17:01:30-05:00",
          "tree_id": "f2e10fa8423a1cc58c77cef278f57f44d81b7d00",
          "url": "https://github.com/ibis-project/ibis/commit/c5081cf24aa923449e5f6d478ab4e34f0a782eac"
        },
        "date": 1678313185868,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 125387.65697054939,
            "unit": "iter/sec",
            "range": "stddev: 0.000006887451611395057",
            "extra": "mean: 7.975266658303349 usec\nrounds: 16208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5264695.289938767,
            "unit": "iter/sec",
            "range": "stddev: 4.5889889436169474e-7",
            "extra": "mean: 189.94451624031416 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.84252308749075,
            "unit": "iter/sec",
            "range": "stddev: 0.001926443587778093",
            "extra": "mean: 22.80890627586445 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.56022198702557,
            "unit": "iter/sec",
            "range": "stddev: 0.012374916055765635",
            "extra": "mean: 30.712321322578045 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 449422.7288584427,
            "unit": "iter/sec",
            "range": "stddev: 0.000001926603848221059",
            "extra": "mean: 2.2250766055825713 usec\nrounds: 2180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 80.61407029080817,
            "unit": "iter/sec",
            "range": "stddev: 0.0011994060745062068",
            "extra": "mean: 12.40478239583472 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5587229917679157,
            "unit": "iter/sec",
            "range": "stddev: 0.07655539460152244",
            "extra": "mean: 1.7897956854000086 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.212739150137448,
            "unit": "iter/sec",
            "range": "stddev: 0.004342724781129177",
            "extra": "mean: 81.88171283333645 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3291.942410627904,
            "unit": "iter/sec",
            "range": "stddev: 0.0001751912872796139",
            "extra": "mean: 303.7720212758097 usec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 591.6671528883327,
            "unit": "iter/sec",
            "range": "stddev: 0.00011582848884777669",
            "extra": "mean: 1.690139456142385 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4496713.3805627255,
            "unit": "iter/sec",
            "range": "stddev: 3.8588906514084217e-7",
            "extra": "mean: 222.38464304247685 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 92.49841769893447,
            "unit": "iter/sec",
            "range": "stddev: 0.011801491582730464",
            "extra": "mean: 10.81099574324415 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3802.5605542995704,
            "unit": "iter/sec",
            "range": "stddev: 0.00008746211419985274",
            "extra": "mean: 262.98069043747273 usec\nrounds: 617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 100.10899647295575,
            "unit": "iter/sec",
            "range": "stddev: 0.0008512894439063353",
            "extra": "mean: 9.989112220000607 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6242.569899140733,
            "unit": "iter/sec",
            "range": "stddev: 0.00005378243171209073",
            "extra": "mean: 160.19043697654814 usec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.27537028799671,
            "unit": "iter/sec",
            "range": "stddev: 0.0018413511136455658",
            "extra": "mean: 30.052257611111425 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10670645127296592,
            "unit": "iter/sec",
            "range": "stddev: 0.14212276501617538",
            "extra": "mean: 9.371504609800008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 78.35720374824557,
            "unit": "iter/sec",
            "range": "stddev: 0.0009687905424105855",
            "extra": "mean: 12.762068478258966 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 537.108725875119,
            "unit": "iter/sec",
            "range": "stddev: 0.00022558067443377127",
            "extra": "mean: 1.8618204319259302 msec\nrounds: 426"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 201.72880346447977,
            "unit": "iter/sec",
            "range": "stddev: 0.0006044187042719474",
            "extra": "mean: 4.957150306877615 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 67.25716654945698,
            "unit": "iter/sec",
            "range": "stddev: 0.019873901269103735",
            "extra": "mean: 14.868304023254659 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 90.05177239910266,
            "unit": "iter/sec",
            "range": "stddev: 0.0024673450276089643",
            "extra": "mean: 11.10472313157897 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1169.7871826816843,
            "unit": "iter/sec",
            "range": "stddev: 0.0007007948200810605",
            "extra": "mean: 854.8563489194207 usec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 241.73537557429992,
            "unit": "iter/sec",
            "range": "stddev: 0.0006256057574945145",
            "extra": "mean: 4.136754902439339 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 953.206255868805,
            "unit": "iter/sec",
            "range": "stddev: 0.00009082356996298467",
            "extra": "mean: 1.0490908907102634 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 218.70795818600027,
            "unit": "iter/sec",
            "range": "stddev: 0.0003815086391393087",
            "extra": "mean: 4.572307328430864 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.525695592462056,
            "unit": "iter/sec",
            "range": "stddev: 0.08261237972211803",
            "extra": "mean: 1.9022415526000032 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 94.29426671065053,
            "unit": "iter/sec",
            "range": "stddev: 0.0008267443378050828",
            "extra": "mean: 10.605098643680847 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5087050.200101134,
            "unit": "iter/sec",
            "range": "stddev: 3.309137675810354e-7",
            "extra": "mean: 196.57757652577126 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 97.40212503529352,
            "unit": "iter/sec",
            "range": "stddev: 0.0012542130232366343",
            "extra": "mean: 10.266716456521367 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 238.85177488265765,
            "unit": "iter/sec",
            "range": "stddev: 0.00044628677198769805",
            "extra": "mean: 4.186696960871557 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1683559.0026120283,
            "unit": "iter/sec",
            "range": "stddev: 0.00000113850163312242",
            "extra": "mean: 593.979776442945 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.47979688571913,
            "unit": "iter/sec",
            "range": "stddev: 0.00045115403569441834",
            "extra": "mean: 10.364864274999519 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5283352620300106,
            "unit": "iter/sec",
            "range": "stddev: 0.03104788165580361",
            "extra": "mean: 1.8927375700000084 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 97.66605324520995,
            "unit": "iter/sec",
            "range": "stddev: 0.00110184372778953",
            "extra": "mean: 10.238972158415187 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.06919277735901,
            "unit": "iter/sec",
            "range": "stddev: 0.0017855389783711134",
            "extra": "mean: 19.97236113724993 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3799.0040126862054,
            "unit": "iter/sec",
            "range": "stddev: 0.00004583369491866841",
            "extra": "mean: 263.22688701055586 usec\nrounds: 1301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 124.87506929081626,
            "unit": "iter/sec",
            "range": "stddev: 0.0006745138351346237",
            "extra": "mean: 8.008003564515688 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.5981784493907518,
            "unit": "iter/sec",
            "range": "stddev: 0.04308729161967485",
            "extra": "mean: 625.7123542000045 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3731.6286656040334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000807489733832746",
            "extra": "mean: 267.97950428921666 usec\nrounds: 2215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 90.50406150363106,
            "unit": "iter/sec",
            "range": "stddev: 0.0013808073925908233",
            "extra": "mean: 11.049227884208042 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3661.0315948402726,
            "unit": "iter/sec",
            "range": "stddev: 0.00011776432320248617",
            "extra": "mean: 273.14705543906376 usec\nrounds: 2850"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 224.39796115489827,
            "unit": "iter/sec",
            "range": "stddev: 0.0008345462626309621",
            "extra": "mean: 4.456368475245265 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5459860935712713,
            "unit": "iter/sec",
            "range": "stddev: 0.037102488374248954",
            "extra": "mean: 1.8315484804000106 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10564.513444669568,
            "unit": "iter/sec",
            "range": "stddev: 0.0000394793752228721",
            "extra": "mean: 94.65651260111368 usec\nrounds: 6785"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 228.3170209354794,
            "unit": "iter/sec",
            "range": "stddev: 0.00036215739965693563",
            "extra": "mean: 4.3798749471358605 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 59.257835900687034,
            "unit": "iter/sec",
            "range": "stddev: 0.0014495120292273287",
            "extra": "mean: 16.87540533332919 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 129.4438651445431,
            "unit": "iter/sec",
            "range": "stddev: 0.0011351411196379455",
            "extra": "mean: 7.725356461531437 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9781109.841402194,
            "unit": "iter/sec",
            "range": "stddev: 2.8182383038796474e-7",
            "extra": "mean: 102.23788672402118 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 28.794145585442138,
            "unit": "iter/sec",
            "range": "stddev: 0.002535558640096653",
            "extra": "mean: 34.72928193103199 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3455.1975655001047,
            "unit": "iter/sec",
            "range": "stddev: 0.00016180155463570967",
            "extra": "mean: 289.41905087712695 usec\nrounds: 1769"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 82.44974420125102,
            "unit": "iter/sec",
            "range": "stddev: 0.0008961914966483439",
            "extra": "mean: 12.128600393945513 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 82.76594103413245,
            "unit": "iter/sec",
            "range": "stddev: 0.0017076893813346317",
            "extra": "mean: 12.08226460673724 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 232.29503865734378,
            "unit": "iter/sec",
            "range": "stddev: 0.0002570412872875347",
            "extra": "mean: 4.304870245098479 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 233.18318187746195,
            "unit": "iter/sec",
            "range": "stddev: 0.0005957882184470065",
            "extra": "mean: 4.2884739454559 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 223.75428195619722,
            "unit": "iter/sec",
            "range": "stddev: 0.0006344871107447479",
            "extra": "mean: 4.469188215114305 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.6254295608444,
            "unit": "iter/sec",
            "range": "stddev: 0.001199041003173738",
            "extra": "mean: 13.400257873017258 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 413.90152237934893,
            "unit": "iter/sec",
            "range": "stddev: 0.00029742275534170296",
            "extra": "mean: 2.416033635854763 msec\nrounds: 357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.08781408103344,
            "unit": "iter/sec",
            "range": "stddev: 0.0013834733588479011",
            "extra": "mean: 10.29995380435035 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.51416119853896,
            "unit": "iter/sec",
            "range": "stddev: 0.002132089606850929",
            "extra": "mean: 32.771669307687894 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 671524.320743541,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020803134546254844",
            "extra": "mean: 1.4891493414456773 usec\nrounds: 21414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 75.87037511466761,
            "unit": "iter/sec",
            "range": "stddev: 0.0009325799166124764",
            "extra": "mean: 13.180375060603534 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 71.90851720241601,
            "unit": "iter/sec",
            "range": "stddev: 0.0013378808856150655",
            "extra": "mean: 13.906558484373832 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1389857.455335615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011253525163815053",
            "extra": "mean: 719.4982450617755 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.81466433565891,
            "unit": "iter/sec",
            "range": "stddev: 0.0028538843432176875",
            "extra": "mean: 48.04305195000609 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 81.49692363203631,
            "unit": "iter/sec",
            "range": "stddev: 0.0013175656963099955",
            "extra": "mean: 12.270401819276788 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 153.14618550026935,
            "unit": "iter/sec",
            "range": "stddev: 0.000684670324538169",
            "extra": "mean: 6.529708831685144 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.303541877625266,
            "unit": "iter/sec",
            "range": "stddev: 0.007593783706183796",
            "extra": "mean: 232.36674079997783 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 134.3843302045335,
            "unit": "iter/sec",
            "range": "stddev: 0.0004609011828021494",
            "extra": "mean: 7.441343782254938 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0718083835719774,
            "unit": "iter/sec",
            "range": "stddev: 0.049321867814070226",
            "extra": "mean: 933.0025920000139 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10082.336393387854,
            "unit": "iter/sec",
            "range": "stddev: 0.00005206036061389695",
            "extra": "mean: 99.18335998547072 usec\nrounds: 5578"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3948.515479326531,
            "unit": "iter/sec",
            "range": "stddev: 0.00008016196528461753",
            "extra": "mean: 253.25973906795033 usec\nrounds: 2081"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3847.4973205115443,
            "unit": "iter/sec",
            "range": "stddev: 0.00008391215501308588",
            "extra": "mean: 259.9092128456752 usec\nrounds: 1339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8746.284819966326,
            "unit": "iter/sec",
            "range": "stddev: 0.00009235066730792824",
            "extra": "mean: 114.33425969814806 usec\nrounds: 4305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1648452.99681091,
            "unit": "iter/sec",
            "range": "stddev: 0.000001743238066279087",
            "extra": "mean: 606.6293682225672 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 85.53992808090521,
            "unit": "iter/sec",
            "range": "stddev: 0.0008862147444128715",
            "extra": "mean: 11.690447051278579 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59707.7499418955,
            "unit": "iter/sec",
            "range": "stddev: 0.00000941897042089974",
            "extra": "mean: 16.74824459091405 usec\nrounds: 13496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.29120944516205,
            "unit": "iter/sec",
            "range": "stddev: 0.00038763756077589255",
            "extra": "mean: 3.7837051111133935 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 89.95224104338563,
            "unit": "iter/sec",
            "range": "stddev: 0.0006895469499265941",
            "extra": "mean: 11.117010409086769 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 220.98072448648114,
            "unit": "iter/sec",
            "range": "stddev: 0.0005489434292584913",
            "extra": "mean: 4.525281570706302 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 91.26624521573864,
            "unit": "iter/sec",
            "range": "stddev: 0.0012878287617898354",
            "extra": "mean: 10.95695344578011 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.076435333744532,
            "unit": "iter/sec",
            "range": "stddev: 0.0051257628742212395",
            "extra": "mean: 123.81700077778784 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.52578976183435,
            "unit": "iter/sec",
            "range": "stddev: 0.0009313487505655954",
            "extra": "mean: 17.691039863633893 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 96.86412659816732,
            "unit": "iter/sec",
            "range": "stddev: 0.00114445738662978",
            "extra": "mean: 10.323739397851753 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 148.75374008248724,
            "unit": "iter/sec",
            "range": "stddev: 0.002993058584750858",
            "extra": "mean: 6.722520048541152 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1620228.5113835074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010612489974911572",
            "extra": "mean: 617.1968910398347 nsec\nrounds: 101000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 178.538227276054,
            "unit": "iter/sec",
            "range": "stddev: 0.004349555303751834",
            "extra": "mean: 5.601041386245032 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3525.7579137027237,
            "unit": "iter/sec",
            "range": "stddev: 0.00016711422365093184",
            "extra": "mean: 283.6269603518546 usec\nrounds: 2270"
          }
        ]
      }
    ]
  }
}