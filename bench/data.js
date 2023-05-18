window.BENCHMARK_DATA = {
  "lastUpdate": 1684444110924,
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
          "id": "20f71bfed5aabdd43cbcdca5fbd32534cf5ae9e5",
          "message": "refactor(api): consolidate `ibis.date()`, `ibis.time()` and `ibis.timestamp()` functions",
          "timestamp": "2023-05-18T16:01:39-05:00",
          "tree_id": "bdca76f5baed9c36fe85071adaa613c67ef17d41",
          "url": "https://github.com/ibis-project/ibis/commit/20f71bfed5aabdd43cbcdca5fbd32534cf5ae9e5"
        },
        "date": 1684444023513,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.011878173520486,
            "unit": "iter/sec",
            "range": "stddev: 0.00023317572040532845",
            "extra": "mean: 21.27121993103546 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.329125442327655,
            "unit": "iter/sec",
            "range": "stddev: 0.009519790408427167",
            "extra": "mean: 54.5579767647118 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 96.71048343762507,
            "unit": "iter/sec",
            "range": "stddev: 0.006168755126882494",
            "extra": "mean: 10.340140638889117 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.22273624233867,
            "unit": "iter/sec",
            "range": "stddev: 0.00012060818702780941",
            "extra": "mean: 17.786398649999313 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.919975215654252,
            "unit": "iter/sec",
            "range": "stddev: 0.0034097570022822666",
            "extra": "mean: 1.0869858046000047 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5241259937985956,
            "unit": "iter/sec",
            "range": "stddev: 0.0014848041479623712",
            "extra": "mean: 396.17673699999614 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 173.86523225981045,
            "unit": "iter/sec",
            "range": "stddev: 0.0001347666940185216",
            "extra": "mean: 5.751581193102938 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.41974150727562,
            "unit": "iter/sec",
            "range": "stddev: 0.012034593163773775",
            "extra": "mean: 29.922433714285187 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1898839.1569404895,
            "unit": "iter/sec",
            "range": "stddev: 1.0653115693495906e-7",
            "extra": "mean: 526.6375492336344 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.0777750358444,
            "unit": "iter/sec",
            "range": "stddev: 0.00007364682415467851",
            "extra": "mean: 9.339006153847041 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1921954.6178548422,
            "unit": "iter/sec",
            "range": "stddev: 9.202783820115765e-8",
            "extra": "mean: 520.3036485409491 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2225.6614848240724,
            "unit": "iter/sec",
            "range": "stddev: 0.00008213740897996436",
            "extra": "mean: 449.3046255320562 usec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.11612373972865,
            "unit": "iter/sec",
            "range": "stddev: 0.00008968730087206914",
            "extra": "mean: 33.20480446428827 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 270.4568245654156,
            "unit": "iter/sec",
            "range": "stddev: 0.0003011332836450377",
            "extra": "mean: 3.6974478333347776 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2250.0738393355987,
            "unit": "iter/sec",
            "range": "stddev: 0.00008330138405022043",
            "extra": "mean: 444.4298593753171 usec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2109.5368257610553,
            "unit": "iter/sec",
            "range": "stddev: 0.0015455336973035202",
            "extra": "mean: 474.03770713470766 usec\nrounds: 1738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 97.1672263380687,
            "unit": "iter/sec",
            "range": "stddev: 0.0005767665657859402",
            "extra": "mean: 10.291535918919346 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.38041671087886,
            "unit": "iter/sec",
            "range": "stddev: 0.0006784238101169593",
            "extra": "mean: 9.580341135922835 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6339715.72096412,
            "unit": "iter/sec",
            "range": "stddev: 3.917945389852833e-9",
            "extra": "mean: 157.7357793336529 nsec\nrounds: 49262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 284.46332731928607,
            "unit": "iter/sec",
            "range": "stddev: 0.0002532027679040475",
            "extra": "mean: 3.5153916303509463 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 173.8069619945634,
            "unit": "iter/sec",
            "range": "stddev: 0.004321526211898056",
            "extra": "mean: 5.753509459714736 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7722.506357456205,
            "unit": "iter/sec",
            "range": "stddev: 0.000011637872968439998",
            "extra": "mean: 129.49163829881266 usec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 432.1938117784193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000494531839796208",
            "extra": "mean: 2.3137767657642643 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.89651271123601,
            "unit": "iter/sec",
            "range": "stddev: 0.0004318976061693997",
            "extra": "mean: 10.111579999993126 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 272.4880643827758,
            "unit": "iter/sec",
            "range": "stddev: 0.0002337085392615569",
            "extra": "mean: 3.6698855132063937 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9403.546876539333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019342542805726167",
            "extra": "mean: 106.34285266284728 usec\nrounds: 4751"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 746.3501086499388,
            "unit": "iter/sec",
            "range": "stddev: 0.00002564751857724755",
            "extra": "mean: 1.3398537608695262 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.85407219121625,
            "unit": "iter/sec",
            "range": "stddev: 0.0006755821543669784",
            "extra": "mean: 9.817967789472815 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.49924075178822,
            "unit": "iter/sec",
            "range": "stddev: 0.00006395095770227654",
            "extra": "mean: 10.050327946668556 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5827197.3536754185,
            "unit": "iter/sec",
            "range": "stddev: 3.786905790394112e-8",
            "extra": "mean: 171.60908397413456 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.6467389539967,
            "unit": "iter/sec",
            "range": "stddev: 0.00007600348218918792",
            "extra": "mean: 9.64815690384477 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1779.1973058320168,
            "unit": "iter/sec",
            "range": "stddev: 0.00000582382297560478",
            "extra": "mean: 562.0512108028199 usec\nrounds: 1333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 100.36803239841285,
            "unit": "iter/sec",
            "range": "stddev: 0.0007546727190466712",
            "extra": "mean: 9.963331711340922 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 85.66570468054717,
            "unit": "iter/sec",
            "range": "stddev: 0.012143227487759707",
            "extra": "mean: 11.67328283505124 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 250.59461908608765,
            "unit": "iter/sec",
            "range": "stddev: 0.00042189649406040733",
            "extra": "mean: 3.990508669527603 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2290.514499539338,
            "unit": "iter/sec",
            "range": "stddev: 0.00007932079978874832",
            "extra": "mean: 436.5831345757109 usec\nrounds: 1449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.00848481113282,
            "unit": "iter/sec",
            "range": "stddev: 0.00031154369826557585",
            "extra": "mean: 15.382607407406427 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2220.9511478783907,
            "unit": "iter/sec",
            "range": "stddev: 0.00008508311594687826",
            "extra": "mean: 450.2575398631666 usec\nrounds: 1317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 231.84460370102215,
            "unit": "iter/sec",
            "range": "stddev: 0.0002471272001234606",
            "extra": "mean: 4.3132338818183635 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7909198018096532,
            "unit": "iter/sec",
            "range": "stddev: 0.001322900423740663",
            "extra": "mean: 1.264350693599988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 75.83690989524875,
            "unit": "iter/sec",
            "range": "stddev: 0.013516678289361293",
            "extra": "mean: 13.186191280489542 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.60828679261365,
            "unit": "iter/sec",
            "range": "stddev: 0.00021155349108917243",
            "extra": "mean: 16.776190925921977 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1904359.928689981,
            "unit": "iter/sec",
            "range": "stddev: 9.079535143448631e-8",
            "extra": "mean: 525.1108180415795 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 411.10104947404477,
            "unit": "iter/sec",
            "range": "stddev: 0.000028679935186330865",
            "extra": "mean: 2.4324919658545796 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6350708.006952043,
            "unit": "iter/sec",
            "range": "stddev: 8.016890540431855e-9",
            "extra": "mean: 157.46275831061863 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.29975461958935,
            "unit": "iter/sec",
            "range": "stddev: 0.0007898847095530326",
            "extra": "mean: 9.587750265063253 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 99.57550090140414,
            "unit": "iter/sec",
            "range": "stddev: 0.0007113248595425366",
            "extra": "mean: 10.042630877550511 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.72189452658685,
            "unit": "iter/sec",
            "range": "stddev: 0.00017439729012211334",
            "extra": "mean: 6.50525419999326 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6553330394569865,
            "unit": "iter/sec",
            "range": "stddev: 0.00159682169562786",
            "extra": "mean: 604.1080411999985 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1924.896816579904,
            "unit": "iter/sec",
            "range": "stddev: 0.0032724257021777164",
            "extra": "mean: 519.5083660519365 usec\nrounds: 1355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 192.22079562288886,
            "unit": "iter/sec",
            "range": "stddev: 0.000059452703729130016",
            "extra": "mean: 5.202350748572826 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 277.2635627452292,
            "unit": "iter/sec",
            "range": "stddev: 0.0002356826622752999",
            "extra": "mean: 3.606676586345664 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.82713874855467,
            "unit": "iter/sec",
            "range": "stddev: 0.0007221680397381678",
            "extra": "mean: 10.435457147728755 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.33755499074628,
            "unit": "iter/sec",
            "range": "stddev: 0.0006435302219196307",
            "extra": "mean: 9.966358060969553 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1075387.7607498083,
            "unit": "iter/sec",
            "range": "stddev: 1.1975603947402787e-7",
            "extra": "mean: 929.8971371059266 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2197.6118769261752,
            "unit": "iter/sec",
            "range": "stddev: 0.00010974914233244917",
            "extra": "mean: 455.0394045916385 usec\nrounds: 1263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 279.27348360938237,
            "unit": "iter/sec",
            "range": "stddev: 0.00024322606777669892",
            "extra": "mean: 3.5807194692307136 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.46322697667372,
            "unit": "iter/sec",
            "range": "stddev: 0.000755395130519403",
            "extra": "mean: 9.953890892158851 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.5716378704857,
            "unit": "iter/sec",
            "range": "stddev: 0.0002748099614114997",
            "extra": "mean: 3.6026735572551463 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 86.08672075115558,
            "unit": "iter/sec",
            "range": "stddev: 0.016446695524849977",
            "extra": "mean: 11.616193430002113 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.85347810175266,
            "unit": "iter/sec",
            "range": "stddev: 0.0008015016299097718",
            "extra": "mean: 10.014673689993856 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4646774.100362007,
            "unit": "iter/sec",
            "range": "stddev: 1.1428784624743338e-8",
            "extra": "mean: 215.2030588105785 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.586215154220971,
            "unit": "iter/sec",
            "range": "stddev: 0.0001726341219134673",
            "extra": "mean: 116.46575144444189 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 117.79329317967415,
            "unit": "iter/sec",
            "range": "stddev: 0.00006333160002754873",
            "extra": "mean: 8.489447684212935 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 683.9591134152744,
            "unit": "iter/sec",
            "range": "stddev: 0.0000208217235231372",
            "extra": "mean: 1.4620757007046963 msec\nrounds: 568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.55757347018445,
            "unit": "iter/sec",
            "range": "stddev: 0.00003030993589175189",
            "extra": "mean: 5.087567893443132 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11906.916276896189,
            "unit": "iter/sec",
            "range": "stddev: 0.000011322262591328504",
            "extra": "mean: 83.98480150065126 usec\nrounds: 5597"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.308044267510082,
            "unit": "iter/sec",
            "range": "stddev: 0.06865137820154686",
            "extra": "mean: 764.5001204000096 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.99187614696181,
            "unit": "iter/sec",
            "range": "stddev: 0.00007005529019338433",
            "extra": "mean: 9.009668407405988 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9211577084508383,
            "unit": "iter/sec",
            "range": "stddev: 0.004279495557966062",
            "extra": "mean: 1.0855904378000105 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.7854073171596,
            "unit": "iter/sec",
            "range": "stddev: 0.00002213775873810584",
            "extra": "mean: 1.8629418504462996 msec\nrounds: 448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13557.769278175303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014844112143592688",
            "extra": "mean: 73.7584465026821 usec\nrounds: 6748"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2222.002258270628,
            "unit": "iter/sec",
            "range": "stddev: 0.00008126041767103309",
            "extra": "mean: 450.0445471096391 usec\nrounds: 1263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4770.419215219107,
            "unit": "iter/sec",
            "range": "stddev: 0.000023620212969438103",
            "extra": "mean: 209.62518279519162 usec\nrounds: 2139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.57089160960402,
            "unit": "iter/sec",
            "range": "stddev: 0.00006334559232154976",
            "extra": "mean: 6.113557187098474 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.57793344661127,
            "unit": "iter/sec",
            "range": "stddev: 0.000596848806526127",
            "extra": "mean: 9.844657851063625 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.751238301012144,
            "unit": "iter/sec",
            "range": "stddev: 0.024619780668073844",
            "extra": "mean: 25.156449024999006 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17815529577303146,
            "unit": "iter/sec",
            "range": "stddev: 0.05917126622995163",
            "extra": "mean: 5.613080406400002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1204.5987158917674,
            "unit": "iter/sec",
            "range": "stddev: 0.00001268617165474368",
            "extra": "mean: 830.1519724431197 usec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.329465977035415,
            "unit": "iter/sec",
            "range": "stddev: 0.0006807922089316821",
            "extra": "mean: 36.5905430000091 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 276.3569174164007,
            "unit": "iter/sec",
            "range": "stddev: 0.00024076925763591493",
            "extra": "mean: 3.61850902575111 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.94580925907955,
            "unit": "iter/sec",
            "range": "stddev: 0.0006497530363430544",
            "extra": "mean: 9.713848550001103 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1606370.7428236813,
            "unit": "iter/sec",
            "range": "stddev: 1.528295941464523e-7",
            "extra": "mean: 622.521298067343 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2201.191567982031,
            "unit": "iter/sec",
            "range": "stddev: 0.00011301182985335561",
            "extra": "mean: 454.2993960842592 usec\nrounds: 1328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141033.6055008839,
            "unit": "iter/sec",
            "range": "stddev: 3.239287191373789e-7",
            "extra": "mean: 7.090508651810173 usec\nrounds: 38315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.82306600669164,
            "unit": "iter/sec",
            "range": "stddev: 0.00013159880446144044",
            "extra": "mean: 20.07102493181957 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 124.74390462750912,
            "unit": "iter/sec",
            "range": "stddev: 0.00006176082376080004",
            "extra": "mean: 8.016423752214944 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.78147369720001,
            "unit": "iter/sec",
            "range": "stddev: 0.0007451044392057006",
            "extra": "mean: 9.922458595957034 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 81.24365229008966,
            "unit": "iter/sec",
            "range": "stddev: 0.017483694095049986",
            "extra": "mean: 12.308653929409608 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 253.5606780824564,
            "unit": "iter/sec",
            "range": "stddev: 0.0038540651980044907",
            "extra": "mean: 3.9438291755743218 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7160100.983854832,
            "unit": "iter/sec",
            "range": "stddev: 1.1365118331066797e-8",
            "extra": "mean: 139.66283467999534 nsec\nrounds: 60610"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12515134.109515462,
            "unit": "iter/sec",
            "range": "stddev: 2.9827395300240968e-9",
            "extra": "mean: 79.90325882631693 nsec\nrounds: 120482"
          }
        ]
      }
    ]
  }
}