window.BENCHMARK_DATA = {
  "lastUpdate": 1678112825902,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "9a9204ff495bf9cb106bbb7484340a0794b4ab31",
          "message": "fix(ir): incorrect predicate pushdown",
          "timestamp": "2023-03-06T09:22:04-05:00",
          "tree_id": "ba99fd60a6b395f1537364c101becade1295b422",
          "url": "https://github.com/ibis-project/ibis/commit/9a9204ff495bf9cb106bbb7484340a0794b4ab31"
        },
        "date": 1678112741010,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5211751560047646,
            "unit": "iter/sec",
            "range": "stddev: 0.0013801162786690896",
            "extra": "mean: 396.6404308000051 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 226.58770490369542,
            "unit": "iter/sec",
            "range": "stddev: 0.006889603758020204",
            "extra": "mean: 4.413302126984433 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.48224837936638,
            "unit": "iter/sec",
            "range": "stddev: 0.0003362998027177164",
            "extra": "mean: 7.221142144230223 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7284517.978128139,
            "unit": "iter/sec",
            "range": "stddev: 9.612604560668089e-9",
            "extra": "mean: 137.2774427906079 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.31302200309577,
            "unit": "iter/sec",
            "range": "stddev: 0.012534960492085608",
            "extra": "mean: 30.018291342858966 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1725.579096695787,
            "unit": "iter/sec",
            "range": "stddev: 0.000021994553182591036",
            "extra": "mean: 579.5155967726098 usec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72808.4345843426,
            "unit": "iter/sec",
            "range": "stddev: 4.840300836212598e-7",
            "extra": "mean: 13.734672441577933 usec\nrounds: 13680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.12551325586081,
            "unit": "iter/sec",
            "range": "stddev: 0.0006185631965116961",
            "extra": "mean: 9.422804840425822 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1659581.96743647,
            "unit": "iter/sec",
            "range": "stddev: 8.98259655243859e-8",
            "extra": "mean: 602.5613796856832 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 234.27233077449577,
            "unit": "iter/sec",
            "range": "stddev: 0.003819563623979041",
            "extra": "mean: 4.268536521978659 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 549.3120340634122,
            "unit": "iter/sec",
            "range": "stddev: 0.00003971105826708313",
            "extra": "mean: 1.8204589340647155 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 107.41419990420263,
            "unit": "iter/sec",
            "range": "stddev: 0.009888699482127285",
            "extra": "mean: 9.309756074074471 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.64318838708729,
            "unit": "iter/sec",
            "range": "stddev: 0.0007021992548144222",
            "extra": "mean: 9.46582562744982 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 304.01322247400435,
            "unit": "iter/sec",
            "range": "stddev: 0.0002400994021764032",
            "extra": "mean: 3.2893306148403076 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5670.1695605529985,
            "unit": "iter/sec",
            "range": "stddev: 0.00005385040021138881",
            "extra": "mean: 176.36156896557998 usec\nrounds: 812"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5814.352231494218,
            "unit": "iter/sec",
            "range": "stddev: 0.000048301448767697466",
            "extra": "mean: 171.98820439246282 usec\nrounds: 2823"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 80.10438990481006,
            "unit": "iter/sec",
            "range": "stddev: 0.01657449903667708",
            "extra": "mean: 12.483710333332837 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8524378843520835,
            "unit": "iter/sec",
            "range": "stddev: 0.010014362768737847",
            "extra": "mean: 1.173106003800001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5312.841569063922,
            "unit": "iter/sec",
            "range": "stddev: 0.000047520154638492264",
            "extra": "mean: 188.22319224101983 usec\nrounds: 2294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.28756488792854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000882131183368086",
            "extra": "mean: 6.277953967741169 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 147.42665737571878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000984894520822084",
            "extra": "mean: 6.783033799996474 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.42937293122755,
            "unit": "iter/sec",
            "range": "stddev: 0.013308034042436407",
            "extra": "mean: 12.58980101562468 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.76779206158304,
            "unit": "iter/sec",
            "range": "stddev: 0.0006923631654475328",
            "extra": "mean: 8.419791112067518 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 297.66257702043873,
            "unit": "iter/sec",
            "range": "stddev: 0.0002154683489281787",
            "extra": "mean: 3.3595086423354314 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 770656.4457992815,
            "unit": "iter/sec",
            "range": "stddev: 2.2896641670479813e-7",
            "extra": "mean: 1.2975950638586513 usec\nrounds: 23095"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.3842517953057,
            "unit": "iter/sec",
            "range": "stddev: 0.00003320799176045101",
            "extra": "mean: 1.4590355663711054 msec\nrounds: 565"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13571.86110935068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017050478278607802",
            "extra": "mean: 73.68186219582105 usec\nrounds: 7068"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.54447471543954,
            "unit": "iter/sec",
            "range": "stddev: 0.0007594543712462881",
            "extra": "mean: 26.635077666668394 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8041312492609471,
            "unit": "iter/sec",
            "range": "stddev: 0.0011670548276941663",
            "extra": "mean: 554.2833984000026 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.55873569594883,
            "unit": "iter/sec",
            "range": "stddev: 0.00012154012612537913",
            "extra": "mean: 10.35639077906812 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.75683247490136,
            "unit": "iter/sec",
            "range": "stddev: 0.000029750531003924623",
            "extra": "mean: 5.108378529409507 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.45677933466682,
            "unit": "iter/sec",
            "range": "stddev: 0.0006563117867991313",
            "extra": "mean: 8.30173283333174 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 354.3410941803123,
            "unit": "iter/sec",
            "range": "stddev: 0.000051921787345299736",
            "extra": "mean: 2.8221395046297775 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 305.33444197444595,
            "unit": "iter/sec",
            "range": "stddev: 0.00022431555884422998",
            "extra": "mean: 3.2750972786872565 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 308.4570653962814,
            "unit": "iter/sec",
            "range": "stddev: 0.00023774260341702554",
            "extra": "mean: 3.2419422739280703 msec\nrounds: 303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.03612481664527,
            "unit": "iter/sec",
            "range": "stddev: 0.0007423271409068275",
            "extra": "mean: 8.846729323232637 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 104.44538010726556,
            "unit": "iter/sec",
            "range": "stddev: 0.00016028289441058922",
            "extra": "mean: 9.574382313253095 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.29882285982488,
            "unit": "iter/sec",
            "range": "stddev: 0.00014977946764947235",
            "extra": "mean: 13.459163436366143 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1173.402054294745,
            "unit": "iter/sec",
            "range": "stddev: 0.000013798217847933873",
            "extra": "mean: 852.222813433742 usec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.88527635396972,
            "unit": "iter/sec",
            "range": "stddev: 0.0003340774203864381",
            "extra": "mean: 15.65305900000011 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 310.0564848591593,
            "unit": "iter/sec",
            "range": "stddev: 0.00020855447606746533",
            "extra": "mean: 3.225218787003413 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 324.8099277727244,
            "unit": "iter/sec",
            "range": "stddev: 0.000020569931755376968",
            "extra": "mean: 3.078723630331025 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5876904.424386047,
            "unit": "iter/sec",
            "range": "stddev: 1.0759454881769728e-8",
            "extra": "mean: 170.15760811899503 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.3747272225263,
            "unit": "iter/sec",
            "range": "stddev: 0.00015427401657406895",
            "extra": "mean: 6.120897748388826 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.15907744245986,
            "unit": "iter/sec",
            "range": "stddev: 0.0006927015721430112",
            "extra": "mean: 8.32230091379377 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8034.893939500592,
            "unit": "iter/sec",
            "range": "stddev: 0.00003312167487992192",
            "extra": "mean: 124.457149967328 usec\nrounds: 4581"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.531438967050235,
            "unit": "iter/sec",
            "range": "stddev: 0.0005762477232796035",
            "extra": "mean: 23.51201897435719 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5341.572223783575,
            "unit": "iter/sec",
            "range": "stddev: 0.000019956106774169598",
            "extra": "mean: 187.21079826412492 usec\nrounds: 2305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1773540.6362682914,
            "unit": "iter/sec",
            "range": "stddev: 1.211870667127542e-7",
            "extra": "mean: 563.8438610034337 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5516.080072889646,
            "unit": "iter/sec",
            "range": "stddev: 0.00006305490518159515",
            "extra": "mean: 181.2881587623766 usec\nrounds: 2003"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.22912426650845,
            "unit": "iter/sec",
            "range": "stddev: 0.00016081174099221086",
            "extra": "mean: 14.039201103447997 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5706.550688954002,
            "unit": "iter/sec",
            "range": "stddev: 0.0000461433325614005",
            "extra": "mean: 175.23720624013202 usec\nrounds: 2628"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.18102921529383,
            "unit": "iter/sec",
            "range": "stddev: 0.000762359102472005",
            "extra": "mean: 9.598676529999182 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6324060.665304256,
            "unit": "iter/sec",
            "range": "stddev: 1.0397237974338055e-8",
            "extra": "mean: 158.12625035161668 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11940.535034775852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020669429463484852",
            "extra": "mean: 83.74834101550559 usec\nrounds: 5771"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5389.829613543387,
            "unit": "iter/sec",
            "range": "stddev: 0.00005179006804732548",
            "extra": "mean: 185.5346220012657 usec\nrounds: 2209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1748113.701174302,
            "unit": "iter/sec",
            "range": "stddev: 1.0692373683872749e-7",
            "extra": "mean: 572.0451703617712 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9283437437407785,
            "unit": "iter/sec",
            "range": "stddev: 0.004121846800217171",
            "extra": "mean: 1.0771872021999969 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 731.1371102838631,
            "unit": "iter/sec",
            "range": "stddev: 0.000010809530155307236",
            "extra": "mean: 1.3677325168349768 msec\nrounds: 594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.7463231070097,
            "unit": "iter/sec",
            "range": "stddev: 0.00015189719717463752",
            "extra": "mean: 3.4159267634403827 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 177.44311330060881,
            "unit": "iter/sec",
            "range": "stddev: 0.0035735446449051324",
            "extra": "mean: 5.635608964467876 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 311.2041755389249,
            "unit": "iter/sec",
            "range": "stddev: 0.00023312485047674185",
            "extra": "mean: 3.213324494339638 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.74610806230042,
            "unit": "iter/sec",
            "range": "stddev: 0.017101995091437915",
            "extra": "mean: 10.025453818964143 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17886706266533878,
            "unit": "iter/sec",
            "range": "stddev: 0.1527608067368532",
            "extra": "mean: 5.590744238199994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.96491432692748,
            "unit": "iter/sec",
            "range": "stddev: 0.00006346478051474398",
            "extra": "mean: 8.477096819047434 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 296.96045950168207,
            "unit": "iter/sec",
            "range": "stddev: 0.0002271104141630533",
            "extra": "mean: 3.3674516859182586 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.100642986918665,
            "unit": "iter/sec",
            "range": "stddev: 0.000502467135852834",
            "extra": "mean: 17.82510764151449 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.84767159427273,
            "unit": "iter/sec",
            "range": "stddev: 0.00010108266447779651",
            "extra": "mean: 63.10075231249712 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5874.740926613943,
            "unit": "iter/sec",
            "range": "stddev: 0.000043237183207526033",
            "extra": "mean: 170.22027226252095 usec\nrounds: 2347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12559412.420270797,
            "unit": "iter/sec",
            "range": "stddev: 1.583976531058994e-8",
            "extra": "mean: 79.62155923671753 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.29853785200048,
            "unit": "iter/sec",
            "range": "stddev: 0.014776349938477297",
            "extra": "mean: 11.454945576469179 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.24220042989802,
            "unit": "iter/sec",
            "range": "stddev: 0.0006859168617214535",
            "extra": "mean: 9.685961707867754 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.10117213121866,
            "unit": "iter/sec",
            "range": "stddev: 0.0007252419567941187",
            "extra": "mean: 8.92051332727781 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.5931185930458,
            "unit": "iter/sec",
            "range": "stddev: 0.00021515671948705892",
            "extra": "mean: 178.79113116667136 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.314101468139857,
            "unit": "iter/sec",
            "range": "stddev: 0.0002307891404693915",
            "extra": "mean: 38.00243763636631 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139680.0459742247,
            "unit": "iter/sec",
            "range": "stddev: 3.8124260292807315e-7",
            "extra": "mean: 7.15921872036419 usec\nrounds: 41153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11611.431136043984,
            "unit": "iter/sec",
            "range": "stddev: 0.000016938780352223404",
            "extra": "mean: 86.12202822232817 usec\nrounds: 4252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.81766498705348,
            "unit": "iter/sec",
            "range": "stddev: 0.00006789699280029068",
            "extra": "mean: 9.023832076924084 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.35340040161971,
            "unit": "iter/sec",
            "range": "stddev: 0.0007272983371320382",
            "extra": "mean: 8.378479344828364 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.90525050750276,
            "unit": "iter/sec",
            "range": "stddev: 0.0006466970589788441",
            "extra": "mean: 9.910287075949983 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.27929334420484,
            "unit": "iter/sec",
            "range": "stddev: 0.00031950127840824424",
            "extra": "mean: 20.71281352174211 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1765071.7129241617,
            "unit": "iter/sec",
            "range": "stddev: 9.807030787416134e-8",
            "extra": "mean: 566.5492187528848 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.66824803586164,
            "unit": "iter/sec",
            "range": "stddev: 0.00018428689091620382",
            "extra": "mean: 10.344658358026967 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5665.121166430604,
            "unit": "iter/sec",
            "range": "stddev: 0.000043007875099090756",
            "extra": "mean: 176.51873113069976 usec\nrounds: 2663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 495056.9810717628,
            "unit": "iter/sec",
            "range": "stddev: 2.5865427227156643e-7",
            "extra": "mean: 2.0199694948954603 usec\nrounds: 2098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9219270594521025,
            "unit": "iter/sec",
            "range": "stddev: 0.004084241545927378",
            "extra": "mean: 1.0846845091999966 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6872989648122371,
            "unit": "iter/sec",
            "range": "stddev: 0.0015302878376900037",
            "extra": "mean: 1.4549709096000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.531294713513029,
            "unit": "iter/sec",
            "range": "stddev: 0.00009254674657900567",
            "extra": "mean: 94.95508645455236 msec\nrounds: 11"
          }
        ]
      }
    ]
  }
}