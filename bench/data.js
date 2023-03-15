window.BENCHMARK_DATA = {
  "lastUpdate": 1678881975919,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "cceffebb85c36baab6069c06a6b5b9e3b4edf8c4",
          "message": "ci: include only a single macos nix job",
          "timestamp": "2023-03-15T07:40:52-04:00",
          "tree_id": "715a962c3adeb2b2811522a26e6a0c2ac6d362e9",
          "url": "https://github.com/ibis-project/ibis/commit/cceffebb85c36baab6069c06a6b5b9e3b4edf8c4"
        },
        "date": 1678881770161,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 92.52427372990316,
            "unit": "iter/sec",
            "range": "stddev: 0.00960406157102549",
            "extra": "mean: 10.807974596149759 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 322.12520315723543,
            "unit": "iter/sec",
            "range": "stddev: 0.00023371479796712051",
            "extra": "mean: 3.1043829858661547 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.53149594274076,
            "unit": "iter/sec",
            "range": "stddev: 0.00018532412854337582",
            "extra": "mean: 15.740224358974222 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 109.32431207001177,
            "unit": "iter/sec",
            "range": "stddev: 0.0006765722050212098",
            "extra": "mean: 9.147096204544104 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5240.79432448056,
            "unit": "iter/sec",
            "range": "stddev: 0.0000235036363299599",
            "extra": "mean: 190.8107699111269 usec\nrounds: 1469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1996841.23959936,
            "unit": "iter/sec",
            "range": "stddev: 1.4927103152479953e-7",
            "extra": "mean: 500.7909392940207 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.8207806238082,
            "unit": "iter/sec",
            "range": "stddev: 0.0006431952909740986",
            "extra": "mean: 8.208780102042489 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.61364223327269,
            "unit": "iter/sec",
            "range": "stddev: 0.0007259440941223874",
            "extra": "mean: 9.206946562497839 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.7473825682664,
            "unit": "iter/sec",
            "range": "stddev: 0.00015127081089011588",
            "extra": "mean: 8.35091321874959 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.487008197685157,
            "unit": "iter/sec",
            "range": "stddev: 0.0003675579543835912",
            "extra": "mean: 95.35608069999739 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12210.398132491464,
            "unit": "iter/sec",
            "range": "stddev: 0.000019030258318041988",
            "extra": "mean: 81.8974114643349 usec\nrounds: 4309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 498895.6725184881,
            "unit": "iter/sec",
            "range": "stddev: 4.787831064719741e-7",
            "extra": "mean: 2.0044270878355674 usec\nrounds: 2311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.585188199880584,
            "unit": "iter/sec",
            "range": "stddev: 0.00006330025247483282",
            "extra": "mean: 64.16348568749797 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.30238163683085,
            "unit": "iter/sec",
            "range": "stddev: 0.019615213251031795",
            "extra": "mean: 30.957469676471472 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.8593348148793,
            "unit": "iter/sec",
            "range": "stddev: 0.00032563961588135727",
            "extra": "mean: 3.5353261388897135 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.9199734172956,
            "unit": "iter/sec",
            "range": "stddev: 0.00001394438904618138",
            "extra": "mean: 1.3246437174967047 msec\nrounds: 623"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11729372.052870842,
            "unit": "iter/sec",
            "range": "stddev: 4.243694019817976e-9",
            "extra": "mean: 85.25605595016172 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6958783.842527634,
            "unit": "iter/sec",
            "range": "stddev: 4.476413382192089e-9",
            "extra": "mean: 143.70327094930255 nsec\nrounds: 59524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6164919.100868874,
            "unit": "iter/sec",
            "range": "stddev: 8.340610232103859e-9",
            "extra": "mean: 162.20813016959463 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.2256762132184,
            "unit": "iter/sec",
            "range": "stddev: 0.00016850045645983922",
            "extra": "mean: 1.8614151264116274 msec\nrounds: 443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1175.9258051436013,
            "unit": "iter/sec",
            "range": "stddev: 0.00001756189372463549",
            "extra": "mean: 850.3937881334974 usec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 106.98020303991662,
            "unit": "iter/sec",
            "range": "stddev: 0.0006125300502275956",
            "extra": "mean: 9.347523855669618 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 104.2281678570968,
            "unit": "iter/sec",
            "range": "stddev: 0.0005548576089280749",
            "extra": "mean: 9.59433539473764 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.6680940436726,
            "unit": "iter/sec",
            "range": "stddev: 0.0002768246360872919",
            "extra": "mean: 5.190272966386055 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13968.48994793576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020605728287653624",
            "extra": "mean: 71.58969965452697 usec\nrounds: 6366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5457372.728073086,
            "unit": "iter/sec",
            "range": "stddev: 9.968183887471907e-9",
            "extra": "mean: 183.23835475908606 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.31372313535192,
            "unit": "iter/sec",
            "range": "stddev: 0.000751204605397653",
            "extra": "mean: 10.602910867646225 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2685923.487443053,
            "unit": "iter/sec",
            "range": "stddev: 1.5999112726325696e-8",
            "extra": "mean: 372.31142460893136 nsec\nrounds: 120468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12775.316292902304,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016597294277690277",
            "extra": "mean: 78.27594848321516 usec\nrounds: 5241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5578.191273661025,
            "unit": "iter/sec",
            "range": "stddev: 0.00009233803775828987",
            "extra": "mean: 179.2695787829609 usec\nrounds: 2234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.78112315063687,
            "unit": "iter/sec",
            "range": "stddev: 0.0006738135492603511",
            "extra": "mean: 8.211453254237542 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5507.719328704113,
            "unit": "iter/sec",
            "range": "stddev: 0.000065996672067168",
            "extra": "mean: 181.5633550512251 usec\nrounds: 3039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.23022566570512,
            "unit": "iter/sec",
            "range": "stddev: 0.00011482113020111099",
            "extra": "mean: 6.126316348100848 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 338.7169715945444,
            "unit": "iter/sec",
            "range": "stddev: 0.000010571621476151084",
            "extra": "mean: 2.9523173736833996 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9059226280251913,
            "unit": "iter/sec",
            "range": "stddev: 0.0032489708886619764",
            "extra": "mean: 1.1038470273999963 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.90130236661375,
            "unit": "iter/sec",
            "range": "stddev: 0.00047003995265136947",
            "extra": "mean: 18.552427419998594 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.835265097289,
            "unit": "iter/sec",
            "range": "stddev: 0.00016888806164985722",
            "extra": "mean: 9.917165378949209 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.403146741259,
            "unit": "iter/sec",
            "range": "stddev: 0.000019238776049003872",
            "extra": "mean: 1.465409420773321 msec\nrounds: 568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.00053286093681,
            "unit": "iter/sec",
            "range": "stddev: 0.0007080111075478086",
            "extra": "mean: 8.333296329265927 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5285.142845158267,
            "unit": "iter/sec",
            "range": "stddev: 0.00004660574208899451",
            "extra": "mean: 189.20964471492056 usec\nrounds: 2384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 162.77257734095832,
            "unit": "iter/sec",
            "range": "stddev: 0.003592045819113355",
            "extra": "mean: 6.143540984212031 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.68691445755534,
            "unit": "iter/sec",
            "range": "stddev: 0.0011555104007286048",
            "extra": "mean: 25.84853338709998 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.1087697346869,
            "unit": "iter/sec",
            "range": "stddev: 0.00007754315382400979",
            "extra": "mean: 6.168697730768276 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5320.755106758195,
            "unit": "iter/sec",
            "range": "stddev: 0.000050804862984109815",
            "extra": "mean: 187.943248643382 usec\nrounds: 2212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1776891.966477008,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011431748182133264",
            "extra": "mean: 562.7804159544212 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.00737283228551,
            "unit": "iter/sec",
            "range": "stddev: 0.0007703932896920367",
            "extra": "mean: 8.848980158879563 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.65408147160969,
            "unit": "iter/sec",
            "range": "stddev: 0.0010010421741937468",
            "extra": "mean: 17.96813411627539 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5403.7116049839215,
            "unit": "iter/sec",
            "range": "stddev: 0.00005101199018817399",
            "extra": "mean: 185.05798849029722 usec\nrounds: 2172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 788578.170686182,
            "unit": "iter/sec",
            "range": "stddev: 2.1062891514829968e-7",
            "extra": "mean: 1.2681051000053034 usec\nrounds: 24510"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6792581505366597,
            "unit": "iter/sec",
            "range": "stddev: 0.0068451012433511215",
            "extra": "mean: 1.4721943332000251 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.076084355773112,
            "unit": "iter/sec",
            "range": "stddev: 0.0005760001455750237",
            "extra": "mean: 41.534993200014014 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 203.86701747533456,
            "unit": "iter/sec",
            "range": "stddev: 0.01100076478665241",
            "extra": "mean: 4.905158334996429 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.37480000453411,
            "unit": "iter/sec",
            "range": "stddev: 0.0007298427742197524",
            "extra": "mean: 9.673537457447454 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69323.98142383988,
            "unit": "iter/sec",
            "range": "stddev: 0.000005102101742019786",
            "extra": "mean: 14.425022617874472 usec\nrounds: 14104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.21981870568415,
            "unit": "iter/sec",
            "range": "stddev: 0.000279987572821109",
            "extra": "mean: 8.991203291261009 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.3758081615349,
            "unit": "iter/sec",
            "range": "stddev: 0.00006133532375982851",
            "extra": "mean: 10.376047880438067 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1753.7351913187888,
            "unit": "iter/sec",
            "range": "stddev: 0.00000569756138576207",
            "extra": "mean: 570.211514800026 usec\nrounds: 1385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8744430384377814,
            "unit": "iter/sec",
            "range": "stddev: 0.013830187872214248",
            "extra": "mean: 1.1435850662000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.12455501277523,
            "unit": "iter/sec",
            "range": "stddev: 0.00025710669465802387",
            "extra": "mean: 10.854869256750565 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146338.26560577453,
            "unit": "iter/sec",
            "range": "stddev: 3.428964421898014e-7",
            "extra": "mean: 6.833482656504437 usec\nrounds: 39525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.29475091734815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000967627761573172",
            "extra": "mean: 6.19982977941066 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 306.4691004887242,
            "unit": "iter/sec",
            "range": "stddev: 0.00020541465277526663",
            "extra": "mean: 3.262971694064121 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5327.868945726115,
            "unit": "iter/sec",
            "range": "stddev: 0.00004710650700753512",
            "extra": "mean: 187.69230440665686 usec\nrounds: 2224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7912900662909605,
            "unit": "iter/sec",
            "range": "stddev: 0.002605380761637746",
            "extra": "mean: 558.2568779999974 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1687872036747759,
            "unit": "iter/sec",
            "range": "stddev: 0.1864113699204495",
            "extra": "mean: 5.924619747399982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8519.461993441184,
            "unit": "iter/sec",
            "range": "stddev: 0.000011660132331871491",
            "extra": "mean: 117.37830402551978 usec\nrounds: 3378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 62.851345161738124,
            "unit": "iter/sec",
            "range": "stddev: 0.0194976468711533",
            "extra": "mean: 15.9105584363653 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.2308703235906,
            "unit": "iter/sec",
            "range": "stddev: 0.00019821226629592663",
            "extra": "mean: 3.308728849999097 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.21050838009296,
            "unit": "iter/sec",
            "range": "stddev: 0.00021925769638675899",
            "extra": "mean: 3.244535707934964 msec\nrounds: 315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.57487061049231,
            "unit": "iter/sec",
            "range": "stddev: 0.0007032396356713227",
            "extra": "mean: 9.295851292452916 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.434670922464356,
            "unit": "iter/sec",
            "range": "stddev: 0.0002390210063469808",
            "extra": "mean: 20.646367177777037 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5714.395626939742,
            "unit": "iter/sec",
            "range": "stddev: 0.00004893735346942501",
            "extra": "mean: 174.99663398971464 usec\nrounds: 2183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.09235519422225,
            "unit": "iter/sec",
            "range": "stddev: 0.000037990190916609345",
            "extra": "mean: 3.4471780524187943 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.09916245352674,
            "unit": "iter/sec",
            "range": "stddev: 0.03039789765534992",
            "extra": "mean: 32.15520680000168 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5727.7377413226395,
            "unit": "iter/sec",
            "range": "stddev: 0.00004713276754489159",
            "extra": "mean: 174.58899921089642 usec\nrounds: 2537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8480340180176157,
            "unit": "iter/sec",
            "range": "stddev: 0.004746127334503713",
            "extra": "mean: 1.1791979787999822 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.57749553283037,
            "unit": "iter/sec",
            "range": "stddev: 0.002136074373387092",
            "extra": "mean: 179.29194100000245 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.24678454556138,
            "unit": "iter/sec",
            "range": "stddev: 0.0004105439008456792",
            "extra": "mean: 7.448967983740532 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1956090.212001493,
            "unit": "iter/sec",
            "range": "stddev: 8.093686457434217e-8",
            "extra": "mean: 511.2238657831578 nsec\nrounds: 178540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 286.16734564055196,
            "unit": "iter/sec",
            "range": "stddev: 0.0001708195511865689",
            "extra": "mean: 3.4944588026338836 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 314.0188539443932,
            "unit": "iter/sec",
            "range": "stddev: 0.0002857657669862044",
            "extra": "mean: 3.184522163045284 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 316.3093340598911,
            "unit": "iter/sec",
            "range": "stddev: 0.0001997881587364288",
            "extra": "mean: 3.1614621900808544 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.48278018455086,
            "unit": "iter/sec",
            "range": "stddev: 0.0006719900412749809",
            "extra": "mean: 8.299941273501812 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.20501840111153,
            "unit": "iter/sec",
            "range": "stddev: 0.0006527220958258295",
            "extra": "mean: 8.319120227269588 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.72005990087901,
            "unit": "iter/sec",
            "range": "stddev: 0.000791918355919248",
            "extra": "mean: 8.35281907499829 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.535022122821152,
            "unit": "iter/sec",
            "range": "stddev: 0.00239075984647466",
            "extra": "mean: 394.4738750000056 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 307.2086036452767,
            "unit": "iter/sec",
            "range": "stddev: 0.00023458438546239936",
            "extra": "mean: 3.255117168380694 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 113.72163107231445,
            "unit": "iter/sec",
            "range": "stddev: 0.0007325403365994398",
            "extra": "mean: 8.793401840711464 msec\nrounds: 113"
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "9b836993b24fe817629ebc3365b6c051abd3fc97",
          "message": "fix(snowflake): ensure that null comparisons are correct",
          "timestamp": "2023-03-15T07:50:39-04:00",
          "tree_id": "b38baa3b4f3deaa88aa80bda5b069499bb9a036f",
          "url": "https://github.com/ibis-project/ibis/commit/9b836993b24fe817629ebc3365b6c051abd3fc97"
        },
        "date": 1678881897134,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 273.61051295871005,
            "unit": "iter/sec",
            "range": "stddev: 0.006436639938320095",
            "extra": "mean: 3.654830324998907 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 38.10403090882941,
            "unit": "iter/sec",
            "range": "stddev: 0.0007813618734142886",
            "extra": "mean: 26.243942600001446 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 307.22708525526707,
            "unit": "iter/sec",
            "range": "stddev: 0.00020842253343408558",
            "extra": "mean: 3.254921352943624 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 86.5244804858307,
            "unit": "iter/sec",
            "range": "stddev: 0.013938027855038875",
            "extra": "mean: 11.557422759258989 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6174246.340243624,
            "unit": "iter/sec",
            "range": "stddev: 9.226772165866856e-9",
            "extra": "mean: 161.96308745905094 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 223.9648178147109,
            "unit": "iter/sec",
            "range": "stddev: 0.003506190630263495",
            "extra": "mean: 4.464986999999765 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 106.10147986262771,
            "unit": "iter/sec",
            "range": "stddev: 0.0006757124092314585",
            "extra": "mean: 9.424939230769688 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 314.3850153254261,
            "unit": "iter/sec",
            "range": "stddev: 0.00023642940105137705",
            "extra": "mean: 3.1808131789133793 msec\nrounds: 313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5141.5147046658685,
            "unit": "iter/sec",
            "range": "stddev: 0.00003296033104064443",
            "extra": "mean: 194.495213461611 usec\nrounds: 1560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1830487.2311354582,
            "unit": "iter/sec",
            "range": "stddev: 1.1656009626827463e-7",
            "extra": "mean: 546.3026362547726 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5105.391177803847,
            "unit": "iter/sec",
            "range": "stddev: 0.00008320448255609015",
            "extra": "mean: 195.87137697647753 usec\nrounds: 2276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.94649651195635,
            "unit": "iter/sec",
            "range": "stddev: 0.0001032078347531903",
            "extra": "mean: 10.314967904762506 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 115.06917080143049,
            "unit": "iter/sec",
            "range": "stddev: 0.000649421170218515",
            "extra": "mean: 8.690425011627601 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12891.560917351622,
            "unit": "iter/sec",
            "range": "stddev: 0.000004086684318250288",
            "extra": "mean: 77.57012563575854 usec\nrounds: 4720"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.82911963177023,
            "unit": "iter/sec",
            "range": "stddev: 0.000748537364964984",
            "extra": "mean: 8.276150674998917 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8206.682200361845,
            "unit": "iter/sec",
            "range": "stddev: 0.000015397642640241825",
            "extra": "mean: 121.85192207831668 usec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 319.95006731274646,
            "unit": "iter/sec",
            "range": "stddev: 0.00019214096241033316",
            "extra": "mean: 3.1254876999994963 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.30673130928342,
            "unit": "iter/sec",
            "range": "stddev: 0.00032711267167401725",
            "extra": "mean: 41.140867000001435 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 91.8996083776626,
            "unit": "iter/sec",
            "range": "stddev: 0.0002221600360246926",
            "extra": "mean: 10.8814391884075 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.80217117468236,
            "unit": "iter/sec",
            "range": "stddev: 0.000289697607066742",
            "extra": "mean: 15.923016374999678 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.2567756436226,
            "unit": "iter/sec",
            "range": "stddev: 0.00003731640915969682",
            "extra": "mean: 3.4333965202704335 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5158.203566980058,
            "unit": "iter/sec",
            "range": "stddev: 0.000050988100855306474",
            "extra": "mean: 193.86594325230632 usec\nrounds: 2097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6996406.029372541,
            "unit": "iter/sec",
            "range": "stddev: 4.1199509377120665e-9",
            "extra": "mean: 142.9305268736808 nsec\nrounds: 58477"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1997079.3546773891,
            "unit": "iter/sec",
            "range": "stddev: 7.797153990784118e-8",
            "extra": "mean: 500.73122916116733 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.38800708466867,
            "unit": "iter/sec",
            "range": "stddev: 0.0007447511370133564",
            "extra": "mean: 17.126804799997647 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.82583492698183,
            "unit": "iter/sec",
            "range": "stddev: 0.0007638817446091679",
            "extra": "mean: 8.345445709678293 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5114.766552672422,
            "unit": "iter/sec",
            "range": "stddev: 0.00013388859112610738",
            "extra": "mean: 195.51234444463716 usec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.091634771129,
            "unit": "iter/sec",
            "range": "stddev: 0.000017641276610736655",
            "extra": "mean: 1.4554099473691033 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1988247.4268807624,
            "unit": "iter/sec",
            "range": "stddev: 8.350386376847085e-8",
            "extra": "mean: 502.95551070765754 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 289.2789209484316,
            "unit": "iter/sec",
            "range": "stddev: 0.0002532527569948792",
            "extra": "mean: 3.45687130165376 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5738.684533028749,
            "unit": "iter/sec",
            "range": "stddev: 0.000048540231049182295",
            "extra": "mean: 174.25596305992138 usec\nrounds: 3059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5638771.516274987,
            "unit": "iter/sec",
            "range": "stddev: 8.989023102710669e-9",
            "extra": "mean: 177.34359285758336 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.4883352683571,
            "unit": "iter/sec",
            "range": "stddev: 0.0007438651571650116",
            "extra": "mean: 8.29955860683737 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.60449104047741,
            "unit": "iter/sec",
            "range": "stddev: 0.00006404257635438184",
            "extra": "mean: 8.88064046788804 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.07428089438084,
            "unit": "iter/sec",
            "range": "stddev: 0.0002534913988405049",
            "extra": "mean: 21.243022325580927 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.71678667652816,
            "unit": "iter/sec",
            "range": "stddev: 0.0000609636609834237",
            "extra": "mean: 6.034391687499685 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13936.33304752011,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014187715240265436",
            "extra": "mean: 71.75488678335972 usec\nrounds: 6227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 495663.32650468015,
            "unit": "iter/sec",
            "range": "stddev: 4.928579722827447e-7",
            "extra": "mean: 2.0174984642333786 usec\nrounds: 2279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 119.96516145523205,
            "unit": "iter/sec",
            "range": "stddev: 0.0007424896387452162",
            "extra": "mean: 8.335753379310663 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1800.8117891458353,
            "unit": "iter/sec",
            "range": "stddev: 0.000004911379902021605",
            "extra": "mean: 555.3051162966465 usec\nrounds: 1350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.9312181896839,
            "unit": "iter/sec",
            "range": "stddev: 0.00002196097909947722",
            "extra": "mean: 1.8418539337898783 msec\nrounds: 438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146038.01092028123,
            "unit": "iter/sec",
            "range": "stddev: 4.987694472616862e-7",
            "extra": "mean: 6.847532321882122 usec\nrounds: 39215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 157.06964912930616,
            "unit": "iter/sec",
            "range": "stddev: 0.0040356284920807315",
            "extra": "mean: 6.366602367442479 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.67448546096516,
            "unit": "iter/sec",
            "range": "stddev: 0.0007468207146595682",
            "extra": "mean: 9.645574757894636 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.65247996389863,
            "unit": "iter/sec",
            "range": "stddev: 0.00027117470545869266",
            "extra": "mean: 7.371778240000708 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 309.9330403996756,
            "unit": "iter/sec",
            "range": "stddev: 0.0002444864945913871",
            "extra": "mean: 3.2265033721814405 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8940870960059839,
            "unit": "iter/sec",
            "range": "stddev: 0.009508719751664335",
            "extra": "mean: 1.1184592691999966 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.165572778120733,
            "unit": "iter/sec",
            "range": "stddev: 0.031165353961898377",
            "extra": "mean: 33.15037335294047 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.18834630631342,
            "unit": "iter/sec",
            "range": "stddev: 0.0007157315834821586",
            "extra": "mean: 8.39008200877295 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.64147102234138,
            "unit": "iter/sec",
            "range": "stddev: 0.00007631388798781398",
            "extra": "mean: 8.28902359632876 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5842719184971346,
            "unit": "iter/sec",
            "range": "stddev: 0.0016886463405733207",
            "extra": "mean: 386.95618399999603 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 293.3304272763527,
            "unit": "iter/sec",
            "range": "stddev: 0.00002673588435932268",
            "extra": "mean: 3.409124683331536 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8482872307512447,
            "unit": "iter/sec",
            "range": "stddev: 0.0030191748113191893",
            "extra": "mean: 1.1788459896000063 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74544.30865983244,
            "unit": "iter/sec",
            "range": "stddev: 4.639944636546243e-7",
            "extra": "mean: 13.414840354389675 usec\nrounds: 14006"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.81946916781291,
            "unit": "iter/sec",
            "range": "stddev: 0.0006406061138589208",
            "extra": "mean: 10.546357291140126 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.568482258818529,
            "unit": "iter/sec",
            "range": "stddev: 0.0001760537564642185",
            "extra": "mean: 64.23233706250109 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6810749590786649,
            "unit": "iter/sec",
            "range": "stddev: 0.01445727966243626",
            "extra": "mean: 1.468267166000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5587.167094972811,
            "unit": "iter/sec",
            "range": "stddev: 0.000049243130826465935",
            "extra": "mean: 178.98158100547488 usec\nrounds: 2506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9028549501949612,
            "unit": "iter/sec",
            "range": "stddev: 0.0072543300996462876",
            "extra": "mean: 1.1075976265999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5613.956653364703,
            "unit": "iter/sec",
            "range": "stddev: 0.00004993971062931977",
            "extra": "mean: 178.12748864041438 usec\nrounds: 2509"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1687405206542796,
            "unit": "iter/sec",
            "range": "stddev: 0.15281801918902763",
            "extra": "mean: 5.926258826999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 750.6875552170335,
            "unit": "iter/sec",
            "range": "stddev: 0.00003388997331034546",
            "extra": "mean: 1.3321121324715275 msec\nrounds: 619"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12100.353442203976,
            "unit": "iter/sec",
            "range": "stddev: 0.00001204729112918251",
            "extra": "mean: 82.64221411187627 usec\nrounds: 4521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.32012240914287,
            "unit": "iter/sec",
            "range": "stddev: 0.00002993867263703598",
            "extra": "mean: 5.067906849999322 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10703356.773835741,
            "unit": "iter/sec",
            "range": "stddev: 5.8055173073877916e-9",
            "extra": "mean: 93.42863375767516 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5415.20667792768,
            "unit": "iter/sec",
            "range": "stddev: 0.00006880455748670348",
            "extra": "mean: 184.66515859422105 usec\nrounds: 1879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.628147242349936,
            "unit": "iter/sec",
            "range": "stddev: 0.000155472532687536",
            "extra": "mean: 177.6783650000008 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.446983952599549,
            "unit": "iter/sec",
            "range": "stddev: 0.00026094284768010315",
            "extra": "mean: 95.72140672726577 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2713382.8208318837,
            "unit": "iter/sec",
            "range": "stddev: 1.724678885664002e-8",
            "extra": "mean: 368.54364681694034 nsec\nrounds: 117634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5286.571843204132,
            "unit": "iter/sec",
            "range": "stddev: 0.00006372360460295794",
            "extra": "mean: 189.15849999948384 usec\nrounds: 2294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 335.47994884182066,
            "unit": "iter/sec",
            "range": "stddev: 0.000014321981567217843",
            "extra": "mean: 2.9808040792074326 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7853781780701317,
            "unit": "iter/sec",
            "range": "stddev: 0.001353820638697925",
            "extra": "mean: 560.105423199991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.02105479955485,
            "unit": "iter/sec",
            "range": "stddev: 0.00037097455846122566",
            "extra": "mean: 17.537381648152305 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.845685933708,
            "unit": "iter/sec",
            "range": "stddev: 0.00005603683799166251",
            "extra": "mean: 6.1033038148138985 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.4615070370576,
            "unit": "iter/sec",
            "range": "stddev: 0.00011364111898487656",
            "extra": "mean: 13.078476199996203 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1178.315106500806,
            "unit": "iter/sec",
            "range": "stddev: 0.000011857072918282866",
            "extra": "mean: 848.6694216877681 usec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 104.31222368636814,
            "unit": "iter/sec",
            "range": "stddev: 0.0006888783713590736",
            "extra": "mean: 9.586604183673282 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 783818.0897186772,
            "unit": "iter/sec",
            "range": "stddev: 1.7231664625146082e-7",
            "extra": "mean: 1.2758062273848685 usec\nrounds: 26882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.54373574151825,
            "unit": "iter/sec",
            "range": "stddev: 0.0009527747478239113",
            "extra": "mean: 25.288455459458973 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.39570231497338,
            "unit": "iter/sec",
            "range": "stddev: 0.0006719568074885741",
            "extra": "mean: 8.237523906780483 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.18740467597368,
            "unit": "iter/sec",
            "range": "stddev: 0.0007630953708173732",
            "extra": "mean: 9.243220160378618 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.44428573534809,
            "unit": "iter/sec",
            "range": "stddev: 0.0006879473609224053",
            "extra": "mean: 9.221324970874365 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 305.6819077001757,
            "unit": "iter/sec",
            "range": "stddev: 0.000205063322708941",
            "extra": "mean: 3.2713745066680153 msec\nrounds: 300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.16311793393685,
            "unit": "iter/sec",
            "range": "stddev: 0.0006963409675059837",
            "extra": "mean: 8.759396362831238 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 321.38915388621865,
            "unit": "iter/sec",
            "range": "stddev: 0.00020270377876693537",
            "extra": "mean: 3.111492680782967 msec\nrounds: 307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.35481663049305,
            "unit": "iter/sec",
            "range": "stddev: 0.0007602602461579518",
            "extra": "mean: 9.314905761908406 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.67676314082448,
            "unit": "iter/sec",
            "range": "stddev: 0.00024228374408386067",
            "extra": "mean: 6.147159438710553 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.64199664075684,
            "unit": "iter/sec",
            "range": "stddev: 0.0001328504975790268",
            "extra": "mean: 9.83845293333224 msec\nrounds: 90"
          }
        ]
      }
    ]
  }
}