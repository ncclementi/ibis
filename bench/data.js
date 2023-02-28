window.BENCHMARK_DATA = {
  "lastUpdate": 1677605432549,
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
          "id": "8ce025a4c524e2e87c6d4ef0dde6f0efada80c0d",
          "message": "docs: add missing DataFusion entry to the backends in the README",
          "timestamp": "2023-02-28T12:23:20-05:00",
          "tree_id": "3a81002faaba29550aee7f30d9b1e62697e62ba4",
          "url": "https://github.com/ibis-project/ibis/commit/8ce025a4c524e2e87c6d4ef0dde6f0efada80c0d"
        },
        "date": 1677605223299,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12720923.054500572,
            "unit": "iter/sec",
            "range": "stddev: 5.013724220683632e-9",
            "extra": "mean: 78.61064764844471 nsec\nrounds: 44053"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2550788.607429332,
            "unit": "iter/sec",
            "range": "stddev: 2.467425239375651e-8",
            "extra": "mean: 392.0356226649119 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.987634696600836,
            "unit": "iter/sec",
            "range": "stddev: 0.00012986982409285322",
            "extra": "mean: 21.74497572222202 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 137.9248432304095,
            "unit": "iter/sec",
            "range": "stddev: 0.0005956900212471058",
            "extra": "mean: 7.250325442309593 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5841237.030302654,
            "unit": "iter/sec",
            "range": "stddev: 1.2639562777527027e-8",
            "extra": "mean: 171.1966138014816 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 115.06561455579346,
            "unit": "iter/sec",
            "range": "stddev: 0.00014291359721131034",
            "extra": "mean: 8.690693599999122 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70246.95877255025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010001134707012318",
            "extra": "mean: 14.235491720543505 usec\nrounds: 12078"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 43.30389722530955,
            "unit": "iter/sec",
            "range": "stddev: 0.00019084304964022634",
            "extra": "mean: 23.092609766668676 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 80.94363392556346,
            "unit": "iter/sec",
            "range": "stddev: 0.014249316638673898",
            "extra": "mean: 12.354276074627556 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.72559647392733,
            "unit": "iter/sec",
            "range": "stddev: 0.0006934472586818977",
            "extra": "mean: 11.530621185184172 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.21591596800047,
            "unit": "iter/sec",
            "range": "stddev: 0.0002494553929522321",
            "extra": "mean: 47.13442499999903 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1741.8892357083557,
            "unit": "iter/sec",
            "range": "stddev: 0.000020228635332147006",
            "extra": "mean: 574.0893160714323 usec\nrounds: 1120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17562221491499402,
            "unit": "iter/sec",
            "range": "stddev: 0.07729451239961659",
            "extra": "mean: 5.6940404747999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5585.49267239884,
            "unit": "iter/sec",
            "range": "stddev: 0.00004233608577263618",
            "extra": "mean: 179.03523621856675 usec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7404423693439561,
            "unit": "iter/sec",
            "range": "stddev: 0.0014072825401001716",
            "extra": "mean: 574.5665685999938 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1886374.6204261843,
            "unit": "iter/sec",
            "range": "stddev: 1.2572462924767463e-7",
            "extra": "mean: 530.1173951195719 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8355149653978248,
            "unit": "iter/sec",
            "range": "stddev: 0.00265723468241529",
            "extra": "mean: 1.1968666527999972 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 543.8850353073194,
            "unit": "iter/sec",
            "range": "stddev: 0.00009158023939411453",
            "extra": "mean: 1.838623854460263 msec\nrounds: 426"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 745152.3578667437,
            "unit": "iter/sec",
            "range": "stddev: 3.3115794967096003e-7",
            "extra": "mean: 1.3420074290080029 usec\nrounds: 22884"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 755.7836035404387,
            "unit": "iter/sec",
            "range": "stddev: 0.000013760664803874466",
            "extra": "mean: 1.3231300537819808 msec\nrounds: 595"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 94.8756222777576,
            "unit": "iter/sec",
            "range": "stddev: 0.0006813071694679831",
            "extra": "mean: 10.540115321430019 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5542.82447696817,
            "unit": "iter/sec",
            "range": "stddev: 0.000053224516321598626",
            "extra": "mean: 180.41343437001325 usec\nrounds: 2316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 127.96384052848109,
            "unit": "iter/sec",
            "range": "stddev: 0.0006040819321092476",
            "extra": "mean: 7.8147076226383545 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5465.143440626929,
            "unit": "iter/sec",
            "range": "stddev: 0.00004595481218760467",
            "extra": "mean: 182.97781400688834 usec\nrounds: 2570"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.0386211392083,
            "unit": "iter/sec",
            "range": "stddev: 0.00003220021236958418",
            "extra": "mean: 1.4576438835753007 msec\nrounds: 481"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 296.04819919648946,
            "unit": "iter/sec",
            "range": "stddev: 0.00008114105351192533",
            "extra": "mean: 3.3778283492827206 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.49382809905006,
            "unit": "iter/sec",
            "range": "stddev: 0.00007309164374441358",
            "extra": "mean: 7.43528542635826 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5552.926191264473,
            "unit": "iter/sec",
            "range": "stddev: 0.00004756437564336304",
            "extra": "mean: 180.08523174198487 usec\nrounds: 2054"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 268.2082908728486,
            "unit": "iter/sec",
            "range": "stddev: 0.0003424968807282145",
            "extra": "mean: 3.7284455180174767 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.13980873652126,
            "unit": "iter/sec",
            "range": "stddev: 0.00007397015628294795",
            "extra": "mean: 15.351595581817243 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.502721203397061,
            "unit": "iter/sec",
            "range": "stddev: 0.0003449066877283125",
            "extra": "mean: 181.72826916665485 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 153.61133280832132,
            "unit": "iter/sec",
            "range": "stddev: 0.00008609812081342814",
            "extra": "mean: 6.509936355072292 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1651885.2157556517,
            "unit": "iter/sec",
            "range": "stddev: 1.2192286659218267e-7",
            "extra": "mean: 605.3689387507181 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 97.42287526300436,
            "unit": "iter/sec",
            "range": "stddev: 0.0009146529490483487",
            "extra": "mean: 10.26452973493529 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9147722941935433,
            "unit": "iter/sec",
            "range": "stddev: 0.004803780035468694",
            "extra": "mean: 1.0931682193999905 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 98.25643864189406,
            "unit": "iter/sec",
            "range": "stddev: 0.0007342536568697156",
            "extra": "mean: 10.177450086956696 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1871150.304859011,
            "unit": "iter/sec",
            "range": "stddev: 9.009919434401987e-8",
            "extra": "mean: 534.4306106266267 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7179294.161266895,
            "unit": "iter/sec",
            "range": "stddev: 6.446753735006565e-9",
            "extra": "mean: 139.28945903840085 nsec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.387316144196895,
            "unit": "iter/sec",
            "range": "stddev: 0.00036781287974627184",
            "extra": "mean: 96.27125872727694 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 133.81593189249634,
            "unit": "iter/sec",
            "range": "stddev: 0.0008540859449051874",
            "extra": "mean: 7.472951731960958 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5770.2602305062655,
            "unit": "iter/sec",
            "range": "stddev: 0.00004934510969983914",
            "extra": "mean: 173.30240925932432 usec\nrounds: 2700"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 133.56132028097628,
            "unit": "iter/sec",
            "range": "stddev: 0.0008381355741965825",
            "extra": "mean: 7.48719762500307 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6586376121249072,
            "unit": "iter/sec",
            "range": "stddev: 0.07532759814494415",
            "extra": "mean: 1.5182855968000126 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.443449954370038,
            "unit": "iter/sec",
            "range": "stddev: 0.00013284823471587702",
            "extra": "mean: 64.75237093749442 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 191.2221879126369,
            "unit": "iter/sec",
            "range": "stddev: 0.000027884298004462377",
            "extra": "mean: 5.229518660548257 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11560.095469249512,
            "unit": "iter/sec",
            "range": "stddev: 0.00001323834467579107",
            "extra": "mean: 86.50447590679981 usec\nrounds: 4026"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.815768562958155,
            "unit": "iter/sec",
            "range": "stddev: 0.0009750191343250467",
            "extra": "mean: 27.92066288462208 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13439.16626368684,
            "unit": "iter/sec",
            "range": "stddev: 0.000002046336880118741",
            "extra": "mean: 74.40937781252396 usec\nrounds: 5066"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 289.4337693548005,
            "unit": "iter/sec",
            "range": "stddev: 0.0003114645162089536",
            "extra": "mean: 3.455021859505815 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1168.2435728523797,
            "unit": "iter/sec",
            "range": "stddev: 0.000015454253156096585",
            "extra": "mean: 855.9858776354346 usec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.22641331492359,
            "unit": "iter/sec",
            "range": "stddev: 0.00004898572081279143",
            "extra": "mean: 12.4647227600038 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 122.33875786365564,
            "unit": "iter/sec",
            "range": "stddev: 0.00005560926966421914",
            "extra": "mean: 8.174024466673776 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5270.288882005585,
            "unit": "iter/sec",
            "range": "stddev: 0.000037735758185158614",
            "extra": "mean: 189.74291967453865 usec\nrounds: 1967"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5711.154258862398,
            "unit": "iter/sec",
            "range": "stddev: 0.00005286005404995433",
            "extra": "mean: 175.09595340525604 usec\nrounds: 2232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6358796.376203344,
            "unit": "iter/sec",
            "range": "stddev: 1.044044407159589e-8",
            "extra": "mean: 157.2624661705883 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 135737.4683482579,
            "unit": "iter/sec",
            "range": "stddev: 4.216828587022586e-7",
            "extra": "mean: 7.367162598276309 usec\nrounds: 33223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 295.82158049256725,
            "unit": "iter/sec",
            "range": "stddev: 0.0004010506397908638",
            "extra": "mean: 3.3804159870112174 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 133.82752894148172,
            "unit": "iter/sec",
            "range": "stddev: 0.0008529806153709866",
            "extra": "mean: 7.4723041507944625 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.467863631563387,
            "unit": "iter/sec",
            "range": "stddev: 0.001729902188086481",
            "extra": "mean: 405.2087754000013 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 92.7515858307834,
            "unit": "iter/sec",
            "range": "stddev: 0.0008202835498443735",
            "extra": "mean: 10.781486818181273 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11815.240253586391,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020169150843075003",
            "extra": "mean: 84.63645076505834 usec\nrounds: 4905"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 282.3864695244108,
            "unit": "iter/sec",
            "range": "stddev: 0.00030785175381910343",
            "extra": "mean: 3.5412461570279143 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 322.83605364343845,
            "unit": "iter/sec",
            "range": "stddev: 0.00010676671539941523",
            "extra": "mean: 3.0975474663200613 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 292.9654315758446,
            "unit": "iter/sec",
            "range": "stddev: 0.00028043541255043993",
            "extra": "mean: 3.4133719962148983 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 287.8947779494753,
            "unit": "iter/sec",
            "range": "stddev: 0.00010669641793445345",
            "extra": "mean: 3.473491277342644 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8095.313579270122,
            "unit": "iter/sec",
            "range": "stddev: 0.000014147912043123508",
            "extra": "mean: 123.52825992568414 usec\nrounds: 3501"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 125.99716210659487,
            "unit": "iter/sec",
            "range": "stddev: 0.0008580059438976699",
            "extra": "mean: 7.936686694212922 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9189246794640241,
            "unit": "iter/sec",
            "range": "stddev: 0.005356816103459521",
            "extra": "mean: 1.0882284721999895 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 131.72237188107133,
            "unit": "iter/sec",
            "range": "stddev: 0.000881514563149777",
            "extra": "mean: 7.591724820312784 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 280.19599918020407,
            "unit": "iter/sec",
            "range": "stddev: 0.00031435110014933814",
            "extra": "mean: 3.5689303306463853 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 96.4695858619753,
            "unit": "iter/sec",
            "range": "stddev: 0.0008218306902441145",
            "extra": "mean: 10.365961365593076 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5823.946564895337,
            "unit": "iter/sec",
            "range": "stddev: 0.00004334082848053997",
            "extra": "mean: 171.70487209268737 usec\nrounds: 344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 293.55891061457896,
            "unit": "iter/sec",
            "range": "stddev: 0.00026740990843908993",
            "extra": "mean: 3.406471286824353 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 93.82263174791557,
            "unit": "iter/sec",
            "range": "stddev: 0.0008328487613928227",
            "extra": "mean: 10.658409185182729 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 195.05250731769988,
            "unit": "iter/sec",
            "range": "stddev: 0.00010130258924362223",
            "extra": "mean: 5.126824636871796 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 97.4082409034258,
            "unit": "iter/sec",
            "range": "stddev: 0.0008221411201643174",
            "extra": "mean: 10.266071851060708 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 478801.17313391494,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041787234622434035",
            "extra": "mean: 2.0885496028647195 usec\nrounds: 2016"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.25809376681441,
            "unit": "iter/sec",
            "range": "stddev: 0.0008745885185169027",
            "extra": "mean: 25.47245431578541 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 75.29178617568176,
            "unit": "iter/sec",
            "range": "stddev: 0.000106648909036152",
            "extra": "mean: 13.281661264704947 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 133.39666138505598,
            "unit": "iter/sec",
            "range": "stddev: 0.0008387917449623037",
            "extra": "mean: 7.496439488192671 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.971708897112116,
            "unit": "iter/sec",
            "range": "stddev: 0.0004012849389551265",
            "extra": "mean: 23.271124785712313 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 130.57436776248906,
            "unit": "iter/sec",
            "range": "stddev: 0.0004652862324404597",
            "extra": "mean: 7.658470932204478 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 293.3092954918127,
            "unit": "iter/sec",
            "range": "stddev: 0.00031465864305393903",
            "extra": "mean: 3.4093702973962294 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.96063194652915,
            "unit": "iter/sec",
            "range": "stddev: 0.00020492565594558375",
            "extra": "mean: 32.29908232257854 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5171.790867703383,
            "unit": "iter/sec",
            "range": "stddev: 0.00006127902659623388",
            "extra": "mean: 193.3566197049391 usec\nrounds: 2101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 72.05974862035437,
            "unit": "iter/sec",
            "range": "stddev: 0.0001097539872015528",
            "extra": "mean: 13.877372862740392 msec\nrounds: 51"
          }
        ]
      }
    ]
  }
}