window.BENCHMARK_DATA = {
  "lastUpdate": 1677628336065,
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
      },
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
          "id": "95a73bdadc3393bd5a2c164798fcfcc82bf02394",
          "message": "ci: pin nix version to workaround upstream bug",
          "timestamp": "2023-02-28T18:45:43-05:00",
          "tree_id": "eeb0e36f946cd92a0734a888ada7a3ec05c2bc6d",
          "url": "https://github.com/ibis-project/ibis/commit/95a73bdadc3393bd5a2c164798fcfcc82bf02394"
        },
        "date": 1677628252319,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 704.2901570274215,
            "unit": "iter/sec",
            "range": "stddev: 0.00003778791547105532",
            "extra": "mean: 1.4198693393936854 msec\nrounds: 330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139153.6064556287,
            "unit": "iter/sec",
            "range": "stddev: 3.856101561384148e-7",
            "extra": "mean: 7.186303147082757 usec\nrounds: 35336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.65705542990177,
            "unit": "iter/sec",
            "range": "stddev: 0.00021582037470235248",
            "extra": "mean: 17.65005244999429 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.82516109989497,
            "unit": "iter/sec",
            "range": "stddev: 0.0005192773180472774",
            "extra": "mean: 9.820755392853796 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13247.226063505406,
            "unit": "iter/sec",
            "range": "stddev: 0.000002879635678825426",
            "extra": "mean: 75.48750170081914 usec\nrounds: 1764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1674125.822321021,
            "unit": "iter/sec",
            "range": "stddev: 1.314247465819487e-7",
            "extra": "mean: 597.3266684421559 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.03875074948387,
            "unit": "iter/sec",
            "range": "stddev: 0.00009187314837681687",
            "extra": "mean: 8.330643177776489 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 305.80899271946095,
            "unit": "iter/sec",
            "range": "stddev: 0.00020079176697286399",
            "extra": "mean: 3.2700150218190838 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 132.64888853720214,
            "unit": "iter/sec",
            "range": "stddev: 0.0005662613911811459",
            "extra": "mean: 7.538698673072894 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.6037893054906585,
            "unit": "iter/sec",
            "range": "stddev: 0.0003303850597375662",
            "extra": "mean: 178.4506778333347 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.464862441994198,
            "unit": "iter/sec",
            "range": "stddev: 0.00014841058769393014",
            "extra": "mean: 95.55787336364058 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.63054175830106,
            "unit": "iter/sec",
            "range": "stddev: 0.011204341080939192",
            "extra": "mean: 10.913391766663949 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5049.6464406983705,
            "unit": "iter/sec",
            "range": "stddev: 0.00018597091492395358",
            "extra": "mean: 198.0336666623533 usec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5811.947103344874,
            "unit": "iter/sec",
            "range": "stddev: 0.00004337056475167604",
            "extra": "mean: 172.05937738567562 usec\nrounds: 2149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6398723.813965678,
            "unit": "iter/sec",
            "range": "stddev: 8.981202667068316e-9",
            "extra": "mean: 156.2811630994203 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 133.39172316425626,
            "unit": "iter/sec",
            "range": "stddev: 0.0006407769575618565",
            "extra": "mean: 7.496717009709944 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 551.6477185495205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000587399927756348",
            "extra": "mean: 1.8127510843865322 msec\nrounds: 474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 86.49818878969498,
            "unit": "iter/sec",
            "range": "stddev: 0.012765925488159406",
            "extra": "mean: 11.560935714287877 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1759.2204450269621,
            "unit": "iter/sec",
            "range": "stddev: 0.000007006445223398629",
            "extra": "mean: 568.4335938834964 usec\nrounds: 1177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 142.74074827482238,
            "unit": "iter/sec",
            "range": "stddev: 0.0005929323880588264",
            "extra": "mean: 7.005707985183562 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5235.449028436513,
            "unit": "iter/sec",
            "range": "stddev: 0.000048673429410525",
            "extra": "mean: 191.00558415686356 usec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.2688943515591,
            "unit": "iter/sec",
            "range": "stddev: 0.00011280663399646876",
            "extra": "mean: 13.464587142854207 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 738.4025526731629,
            "unit": "iter/sec",
            "range": "stddev: 0.00001170045019160803",
            "extra": "mean: 1.3542748415207975 msec\nrounds: 631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 506368.558442097,
            "unit": "iter/sec",
            "range": "stddev: 1.2946989668141625e-7",
            "extra": "mean: 1.974846153711871 usec\nrounds: 1989"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 309.889900059387,
            "unit": "iter/sec",
            "range": "stddev: 0.0002115519143766584",
            "extra": "mean: 3.2269525396224945 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69789.27955877707,
            "unit": "iter/sec",
            "range": "stddev: 6.225854690494303e-7",
            "extra": "mean: 14.3288483033815 usec\nrounds: 13316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17915638647748178,
            "unit": "iter/sec",
            "range": "stddev: 0.09044962698418016",
            "extra": "mean: 5.5817156154000145 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11801.628430641711,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020726137677636327",
            "extra": "mean: 84.73406919028251 usec\nrounds: 5203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5530.967960576975,
            "unit": "iter/sec",
            "range": "stddev: 0.00004626127119920765",
            "extra": "mean: 180.80017948534322 usec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8552251950222388,
            "unit": "iter/sec",
            "range": "stddev: 0.0023322290106431855",
            "extra": "mean: 1.1692826705999892 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11732.288990555775,
            "unit": "iter/sec",
            "range": "stddev: 0.000011877830828924674",
            "extra": "mean: 85.23485918263496 usec\nrounds: 4204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9219846879305491,
            "unit": "iter/sec",
            "range": "stddev: 0.0031145079615816575",
            "extra": "mean: 1.0846167112000102 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7969868606631718,
            "unit": "iter/sec",
            "range": "stddev: 0.001313232449229153",
            "extra": "mean: 556.4870961999986 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5338.12056822632,
            "unit": "iter/sec",
            "range": "stddev: 0.000044765375749173755",
            "extra": "mean: 187.33184970609736 usec\nrounds: 2209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 13002896.414527515,
            "unit": "iter/sec",
            "range": "stddev: 3.912590421266566e-9",
            "extra": "mean: 76.90594219313743 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8075.236005907141,
            "unit": "iter/sec",
            "range": "stddev: 0.000038736576741175085",
            "extra": "mean: 123.83538998346141 usec\nrounds: 3554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6842697885308279,
            "unit": "iter/sec",
            "range": "stddev: 0.0017538499671479713",
            "extra": "mean: 1.4614118828000073 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.06937701124926,
            "unit": "iter/sec",
            "range": "stddev: 0.00006121385041273502",
            "extra": "mean: 7.242735656861295 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 135.31484915919967,
            "unit": "iter/sec",
            "range": "stddev: 0.00005863277237544122",
            "extra": "mean: 7.39017193023278 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 296.42358934426477,
            "unit": "iter/sec",
            "range": "stddev: 0.00004252324462818004",
            "extra": "mean: 3.37355067527573 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5846.626812073759,
            "unit": "iter/sec",
            "range": "stddev: 0.000043209471306458446",
            "extra": "mean: 171.03879418726004 usec\nrounds: 2512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5377.579558198502,
            "unit": "iter/sec",
            "range": "stddev: 0.00001855024120113857",
            "extra": "mean: 185.95726742441755 usec\nrounds: 2468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.845621458503928,
            "unit": "iter/sec",
            "range": "stddev: 0.0002387297484470633",
            "extra": "mean: 37.25002237499808 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.304134277894114,
            "unit": "iter/sec",
            "range": "stddev: 0.0008793754521177585",
            "extra": "mean: 22.073040704542148 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 143.45579547506313,
            "unit": "iter/sec",
            "range": "stddev: 0.0005322198520056523",
            "extra": "mean: 6.970788434781846 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.339891124709176,
            "unit": "iter/sec",
            "range": "stddev: 0.00027619980921043507",
            "extra": "mean: 20.686848413045865 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5146433389869065,
            "unit": "iter/sec",
            "range": "stddev: 0.0015332037583127083",
            "extra": "mean: 397.67070920000833 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7111704.01772428,
            "unit": "iter/sec",
            "range": "stddev: 8.825154695622037e-9",
            "extra": "mean: 140.61327601803575 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 744443.9859492888,
            "unit": "iter/sec",
            "range": "stddev: 1.5578038750524884e-7",
            "extra": "mean: 1.343284409403664 usec\nrounds: 23867"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.63484975947249,
            "unit": "iter/sec",
            "range": "stddev: 0.0007521388435018192",
            "extra": "mean: 26.571117100003978 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.26810252623676,
            "unit": "iter/sec",
            "range": "stddev: 0.00007062568657380964",
            "extra": "mean: 6.239544764288293 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 301.7517800147313,
            "unit": "iter/sec",
            "range": "stddev: 0.0002187872374942469",
            "extra": "mean: 3.313982107913931 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 357.8085727711315,
            "unit": "iter/sec",
            "range": "stddev: 0.000035390138558491996",
            "extra": "mean: 2.794790500001909 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2536102.6275879852,
            "unit": "iter/sec",
            "range": "stddev: 1.523797295601576e-8",
            "extra": "mean: 394.30580967896765 nsec\nrounds: 90091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1893502.012791264,
            "unit": "iter/sec",
            "range": "stddev: 1.0435822978486798e-7",
            "extra": "mean: 528.1219630318069 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 140.79351075557554,
            "unit": "iter/sec",
            "range": "stddev: 0.000666741061352573",
            "extra": "mean: 7.102600074630209 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.82611834275457,
            "unit": "iter/sec",
            "range": "stddev: 0.00008156078661443795",
            "extra": "mean: 10.327791892473703 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.78777903509445,
            "unit": "iter/sec",
            "range": "stddev: 0.00025812004443015186",
            "extra": "mean: 3.5362207073166987 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 312.8723766564013,
            "unit": "iter/sec",
            "range": "stddev: 0.00018190004216294203",
            "extra": "mean: 3.196191401384748 msec\nrounds: 289"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5608356.70401097,
            "unit": "iter/sec",
            "range": "stddev: 9.480559223410377e-9",
            "extra": "mean: 178.3053491021399 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.95903786476728,
            "unit": "iter/sec",
            "range": "stddev: 0.00018494186193708428",
            "extra": "mean: 10.208348528090923 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.76625130046912,
            "unit": "iter/sec",
            "range": "stddev: 0.0006966438649052731",
            "extra": "mean: 9.454811792082156 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1195.6560047360592,
            "unit": "iter/sec",
            "range": "stddev: 0.000013537192959052581",
            "extra": "mean: 836.3609566956926 usec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.06469782242557,
            "unit": "iter/sec",
            "range": "stddev: 0.0006558980764233122",
            "extra": "mean: 9.894651857140435 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.16136525975662,
            "unit": "iter/sec",
            "range": "stddev: 0.00002838714799861405",
            "extra": "mean: 5.097843801585502 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.51407513449483,
            "unit": "iter/sec",
            "range": "stddev: 0.014350342620708735",
            "extra": "mean: 10.809166049017115 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.733632269304394,
            "unit": "iter/sec",
            "range": "stddev: 0.0005959848738735773",
            "extra": "mean: 24.54973800000569 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 142.49612929054447,
            "unit": "iter/sec",
            "range": "stddev: 0.0006128208724567373",
            "extra": "mean: 7.017734481482202 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 308.76436902679154,
            "unit": "iter/sec",
            "range": "stddev: 0.00022454039748494797",
            "extra": "mean: 3.2387156690130587 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.90268910404954,
            "unit": "iter/sec",
            "range": "stddev: 0.0006298927053294554",
            "extra": "mean: 10.763951072288293 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 195.33692753990658,
            "unit": "iter/sec",
            "range": "stddev: 0.00014647314516629442",
            "extra": "mean: 5.119359726776207 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 142.521378358754,
            "unit": "iter/sec",
            "range": "stddev: 0.0005613684239432148",
            "extra": "mean: 7.01649122058591 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.846306451877112,
            "unit": "iter/sec",
            "range": "stddev: 0.0006837988096806587",
            "extra": "mean: 63.10618837499149 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.48418102159307,
            "unit": "iter/sec",
            "range": "stddev: 0.00012765807068704934",
            "extra": "mean: 13.796113661022114 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.58372991251603,
            "unit": "iter/sec",
            "range": "stddev: 0.0006233047360864398",
            "extra": "mean: 9.654025790001697 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.09779231009645,
            "unit": "iter/sec",
            "range": "stddev: 0.000050888147715487084",
            "extra": "mean: 6.531772829058961 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 296.24575380169733,
            "unit": "iter/sec",
            "range": "stddev: 0.000223311801491933",
            "extra": "mean: 3.37557580882454 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 326.41099644404073,
            "unit": "iter/sec",
            "range": "stddev: 0.00007170511837673256",
            "extra": "mean: 3.0636222764983905 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9241996595917569,
            "unit": "iter/sec",
            "range": "stddev: 0.002941165640967755",
            "extra": "mean: 1.0820172780000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5876.217339524103,
            "unit": "iter/sec",
            "range": "stddev: 0.00004274118966693529",
            "extra": "mean: 170.17750403374066 usec\nrounds: 2603"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5493.253339787934,
            "unit": "iter/sec",
            "range": "stddev: 0.000044116898627901044",
            "extra": "mean: 182.04148582715916 usec\nrounds: 3034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 298.6537326423929,
            "unit": "iter/sec",
            "range": "stddev: 0.00017253112492637121",
            "extra": "mean: 3.3483592893760914 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 141.66980199651118,
            "unit": "iter/sec",
            "range": "stddev: 0.0005910883381731891",
            "extra": "mean: 7.058667308821581 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.89251797986886,
            "unit": "iter/sec",
            "range": "stddev: 0.000547372689065296",
            "extra": "mean: 15.410097051715928 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1877155.8618971913,
            "unit": "iter/sec",
            "range": "stddev: 9.392598150185029e-8",
            "extra": "mean: 532.7208146633742 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.52974641445729,
            "unit": "iter/sec",
            "range": "stddev: 0.0001476917400793228",
            "extra": "mean: 9.214063729414459 msec\nrounds: 85"
          }
        ]
      }
    ]
  }
}