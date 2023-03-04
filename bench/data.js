window.BENCHMARK_DATA = {
  "lastUpdate": 1677930278985,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "2640b5021a1f570b70a469e5bb45c8dcdb2bf81e",
          "message": "chore(deps): update trinodb/trino docker tag to v409",
          "timestamp": "2023-03-04T06:38:32-05:00",
          "tree_id": "0190c254417e8607162d3c45e18ccce920c3c8a8",
          "url": "https://github.com/ibis-project/ibis/commit/2640b5021a1f570b70a469e5bb45c8dcdb2bf81e"
        },
        "date": 1677930195303,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 192.83197583146833,
            "unit": "iter/sec",
            "range": "stddev: 0.0031779432344224926",
            "extra": "mean: 5.1858619178075624 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.64684603880869,
            "unit": "iter/sec",
            "range": "stddev: 0.00047232121050245417",
            "extra": "mean: 9.289635849056658 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7082076.926588899,
            "unit": "iter/sec",
            "range": "stddev: 7.038644729787036e-9",
            "extra": "mean: 141.2015162170555 nsec\nrounds: 65360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.91152307878464,
            "unit": "iter/sec",
            "range": "stddev: 0.00020892996855025744",
            "extra": "mean: 13.905977195121046 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.801866396007664,
            "unit": "iter/sec",
            "range": "stddev: 0.0004463437800541924",
            "extra": "mean: 35.9688081999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69356.05793684292,
            "unit": "iter/sec",
            "range": "stddev: 0.000002013576915320934",
            "extra": "mean: 14.41835118297267 usec\nrounds: 14286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 273.0430221603784,
            "unit": "iter/sec",
            "range": "stddev: 0.0045185247009410815",
            "extra": "mean: 3.6624264999990577 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.5023462015346,
            "unit": "iter/sec",
            "range": "stddev: 0.00048429551280727026",
            "extra": "mean: 9.66161673333327 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6800719904895048,
            "unit": "iter/sec",
            "range": "stddev: 0.029794747626616734",
            "extra": "mean: 1.4704325630000086 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7629.601728444499,
            "unit": "iter/sec",
            "range": "stddev: 0.000015489892541167744",
            "extra": "mean: 131.0684404759719 usec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5862.657004917939,
            "unit": "iter/sec",
            "range": "stddev: 0.000043459686014970326",
            "extra": "mean: 170.57112486047566 usec\nrounds: 2691"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 143.610205547102,
            "unit": "iter/sec",
            "range": "stddev: 0.00048778755595023864",
            "extra": "mean: 6.963293424658563 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 95.19694378348744,
            "unit": "iter/sec",
            "range": "stddev: 0.0003500025056031906",
            "extra": "mean: 10.504538909088978 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 133.30559369688896,
            "unit": "iter/sec",
            "range": "stddev: 0.000495065839793952",
            "extra": "mean: 7.501560679245058 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.30300886793063,
            "unit": "iter/sec",
            "range": "stddev: 0.000048995945453005986",
            "extra": "mean: 13.279681848488142 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 134.65221795072827,
            "unit": "iter/sec",
            "range": "stddev: 0.000515628384445438",
            "extra": "mean: 7.4265393858266675 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 316.0868009241486,
            "unit": "iter/sec",
            "range": "stddev: 0.00016210587587069033",
            "extra": "mean: 3.1636879397566813 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2502172.4367961898,
            "unit": "iter/sec",
            "range": "stddev: 1.5213177313107505e-8",
            "extra": "mean: 399.65271189727264 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.20503422559136,
            "unit": "iter/sec",
            "range": "stddev: 0.00020863751610557737",
            "extra": "mean: 16.89045556818123 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.331220303218,
            "unit": "iter/sec",
            "range": "stddev: 0.00007116272974372406",
            "extra": "mean: 6.237088435482512 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5693.5295121868785,
            "unit": "iter/sec",
            "range": "stddev: 0.000042290456277976234",
            "extra": "mean: 175.63797603218202 usec\nrounds: 2712"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.847672114312095,
            "unit": "iter/sec",
            "range": "stddev: 0.002049343208626457",
            "extra": "mean: 1.1797014235999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.68120674761443,
            "unit": "iter/sec",
            "range": "stddev: 0.00009218283519639278",
            "extra": "mean: 7.263155398057454 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.57038459448644,
            "unit": "iter/sec",
            "range": "stddev: 0.0005073813366562379",
            "extra": "mean: 9.749402851061884 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 295.58931847298163,
            "unit": "iter/sec",
            "range": "stddev: 0.00007585561048226729",
            "extra": "mean: 3.3830721798947723 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 143.05084940433787,
            "unit": "iter/sec",
            "range": "stddev: 0.0005300835713857127",
            "extra": "mean: 6.990521231883548 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 478253.1588428888,
            "unit": "iter/sec",
            "range": "stddev: 2.580233198910149e-7",
            "extra": "mean: 2.0909428019659155 usec\nrounds: 2063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2509699.5642629606,
            "unit": "iter/sec",
            "range": "stddev: 1.4554839970552045e-8",
            "extra": "mean: 398.4540676658681 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.56066424864467,
            "unit": "iter/sec",
            "range": "stddev: 0.00014618981543172477",
            "extra": "mean: 10.464556811765599 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 142.23245531622243,
            "unit": "iter/sec",
            "range": "stddev: 0.000554758245319429",
            "extra": "mean: 7.030744127820341 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.8304796747101,
            "unit": "iter/sec",
            "range": "stddev: 0.00010499609074864232",
            "extra": "mean: 1.8455956936943705 msec\nrounds: 444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.09451766767681,
            "unit": "iter/sec",
            "range": "stddev: 0.00046100480757702516",
            "extra": "mean: 9.25116297825923 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 716661.2806395036,
            "unit": "iter/sec",
            "range": "stddev: 1.6238515977300314e-7",
            "extra": "mean: 1.3953593238742614 usec\nrounds: 25317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.268920249478,
            "unit": "iter/sec",
            "range": "stddev: 0.000032652348723138174",
            "extra": "mean: 10.073646388888355 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5304.071201297446,
            "unit": "iter/sec",
            "range": "stddev: 0.00004165150553944929",
            "extra": "mean: 188.53442234248038 usec\nrounds: 2408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13512.15100569701,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017283074996326619",
            "extra": "mean: 74.00746184514803 usec\nrounds: 8020"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.974629301414875,
            "unit": "iter/sec",
            "range": "stddev: 0.0003616058531753178",
            "extra": "mean: 62.5992616874953 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 359.0084526649921,
            "unit": "iter/sec",
            "range": "stddev: 0.00003165684094973709",
            "extra": "mean: 2.78544973684268 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5508.801841167421,
            "unit": "iter/sec",
            "range": "stddev: 0.000045766085792660115",
            "extra": "mean: 181.5276767675638 usec\nrounds: 2574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.654448865293325,
            "unit": "iter/sec",
            "range": "stddev: 0.022403958499789635",
            "extra": "mean: 30.623698600004445 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 141.7217787233363,
            "unit": "iter/sec",
            "range": "stddev: 0.000566693607663037",
            "extra": "mean: 7.056078529413329 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 298.8095502221411,
            "unit": "iter/sec",
            "range": "stddev: 0.00021027779050086088",
            "extra": "mean: 3.34661325000014 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.46805868398462,
            "unit": "iter/sec",
            "range": "stddev: 0.00023608032700502828",
            "extra": "mean: 21.066797921049016 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.01501617673914,
            "unit": "iter/sec",
            "range": "stddev: 0.0005683869802165038",
            "extra": "mean: 9.522447707068967 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9283177677704145,
            "unit": "iter/sec",
            "range": "stddev: 0.004342428690325623",
            "extra": "mean: 1.0772173438000094 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11613.218853140661,
            "unit": "iter/sec",
            "range": "stddev: 0.000011016358464520282",
            "extra": "mean: 86.10877075907008 usec\nrounds: 4781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 741.9723008934469,
            "unit": "iter/sec",
            "range": "stddev: 0.000011694262246027291",
            "extra": "mean: 1.347759207177746 msec\nrounds: 613"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 312.7544487643691,
            "unit": "iter/sec",
            "range": "stddev: 0.0001784275177361348",
            "extra": "mean: 3.197396564463917 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.314805159548659,
            "unit": "iter/sec",
            "range": "stddev: 0.03978053560122942",
            "extra": "mean: 107.35597609091099 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6370397.6480934005,
            "unit": "iter/sec",
            "range": "stddev: 8.793845207131497e-9",
            "extra": "mean: 156.97607201975663 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1736.4768841523828,
            "unit": "iter/sec",
            "range": "stddev: 0.000048167748594051786",
            "extra": "mean: 575.878670845725 usec\nrounds: 1276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.8606581552575,
            "unit": "iter/sec",
            "range": "stddev: 0.0005529783560822475",
            "extra": "mean: 9.271221009615697 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1683018.772652065,
            "unit": "iter/sec",
            "range": "stddev: 7.979179856882663e-8",
            "extra": "mean: 594.1704372222904 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5315.961865539009,
            "unit": "iter/sec",
            "range": "stddev: 0.00005657558599097813",
            "extra": "mean: 188.1127113575721 usec\nrounds: 2439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11815.086748554144,
            "unit": "iter/sec",
            "range": "stddev: 0.000005030680018222931",
            "extra": "mean: 84.6375503863629 usec\nrounds: 5438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7869084274763636,
            "unit": "iter/sec",
            "range": "stddev: 0.0010790884835682787",
            "extra": "mean: 559.6257674000071 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5729387.687025222,
            "unit": "iter/sec",
            "range": "stddev: 1.1722735206056876e-8",
            "extra": "mean: 174.53872117333634 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5831.163988273731,
            "unit": "iter/sec",
            "range": "stddev: 0.00005631120936923066",
            "extra": "mean: 171.49234732738876 usec\nrounds: 2525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2485409.9006379186,
            "unit": "iter/sec",
            "range": "stddev: 1.4721710842973345e-8",
            "extra": "mean: 402.34811961752774 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.84979802374603,
            "unit": "iter/sec",
            "range": "stddev: 0.0005328489982082897",
            "extra": "mean: 9.722916517241183 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17935546145988887,
            "unit": "iter/sec",
            "range": "stddev: 0.13174026943809777",
            "extra": "mean: 5.575520209199988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.29225948309045,
            "unit": "iter/sec",
            "range": "stddev: 0.000023627427016543892",
            "extra": "mean: 5.120530647998294 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.64356073560259,
            "unit": "iter/sec",
            "range": "stddev: 0.00011709210193452066",
            "extra": "mean: 9.204411133335572 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 278.80692923364523,
            "unit": "iter/sec",
            "range": "stddev: 0.0066555184164208015",
            "extra": "mean: 3.5867114305540877 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 142.42954929790125,
            "unit": "iter/sec",
            "range": "stddev: 0.0005694566151371143",
            "extra": "mean: 7.021014985510001 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.4465437676315,
            "unit": "iter/sec",
            "range": "stddev: 0.00011080987957829597",
            "extra": "mean: 7.437900387594445 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.94088636706428,
            "unit": "iter/sec",
            "range": "stddev: 0.000069109033847554",
            "extra": "mean: 14.505180491525252 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 263.71229618620816,
            "unit": "iter/sec",
            "range": "stddev: 0.004021755491819758",
            "extra": "mean: 3.7920112731258326 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 323.9531531006008,
            "unit": "iter/sec",
            "range": "stddev: 0.00006132666549656915",
            "extra": "mean: 3.086866080570171 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10182010.887950096,
            "unit": "iter/sec",
            "range": "stddev: 5.176488436109591e-9",
            "extra": "mean: 98.21242689728263 nsec\nrounds: 85463"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 141.49711975802586,
            "unit": "iter/sec",
            "range": "stddev: 0.0006131353678256543",
            "extra": "mean: 7.067281664178744 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.512785132419261,
            "unit": "iter/sec",
            "range": "stddev: 0.0019073126684215804",
            "extra": "mean: 397.9647870000008 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139844.41667112478,
            "unit": "iter/sec",
            "range": "stddev: 3.83081465520164e-7",
            "extra": "mean: 7.150803899105405 usec\nrounds: 48781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 50.245350453856226,
            "unit": "iter/sec",
            "range": "stddev: 0.0000935135144931696",
            "extra": "mean: 19.902339041666533 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1190.008808595097,
            "unit": "iter/sec",
            "range": "stddev: 0.000011920106369583988",
            "extra": "mean: 840.329914179864 usec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5862.045613288084,
            "unit": "iter/sec",
            "range": "stddev: 0.000043229213441776395",
            "extra": "mean: 170.58891485477358 usec\nrounds: 2760"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5643.902828775923,
            "unit": "iter/sec",
            "range": "stddev: 0.00004545350556575283",
            "extra": "mean: 177.18235595790455 usec\nrounds: 3315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.40138962387717,
            "unit": "iter/sec",
            "range": "stddev: 0.00005491185124338706",
            "extra": "mean: 8.375111907408037 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.591011008813581,
            "unit": "iter/sec",
            "range": "stddev: 0.001806125119456425",
            "extra": "mean: 178.85852816666178 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9174446969414887,
            "unit": "iter/sec",
            "range": "stddev: 0.006558538734379337",
            "extra": "mean: 1.0899839557999826 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5470.591967398061,
            "unit": "iter/sec",
            "range": "stddev: 0.000043318600413219496",
            "extra": "mean: 182.7955742192966 usec\nrounds: 2304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.6938709225898,
            "unit": "iter/sec",
            "range": "stddev: 0.000020071027382698243",
            "extra": "mean: 1.456252986001573 msec\nrounds: 500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.68603243813264,
            "unit": "iter/sec",
            "range": "stddev: 0.000566676442117359",
            "extra": "mean: 24.578459487800988 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.30937273579883,
            "unit": "iter/sec",
            "range": "stddev: 0.00024137849805856406",
            "extra": "mean: 3.5172952280024674 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 306.8803684658179,
            "unit": "iter/sec",
            "range": "stddev: 0.00018395347675896346",
            "extra": "mean: 3.2585987986109504 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.49154962633222,
            "unit": "iter/sec",
            "range": "stddev: 0.00004011464703316658",
            "extra": "mean: 6.557740428570739 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.20145430182913,
            "unit": "iter/sec",
            "range": "stddev: 0.000196090218178231",
            "extra": "mean: 3.1928331949452247 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 194.03158358492618,
            "unit": "iter/sec",
            "range": "stddev: 0.0000995302721543567",
            "extra": "mean: 5.153800126371217 msec\nrounds: 182"
          }
        ]
      }
    ]
  }
}