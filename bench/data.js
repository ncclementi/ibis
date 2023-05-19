window.BENCHMARK_DATA = {
  "lastUpdate": 1684491248620,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "5ed40e1d9eea4573cb5626de248759412c5980cb",
          "message": "feat(mysql): add re_extract",
          "timestamp": "2023-05-19T05:05:24-05:00",
          "tree_id": "ca6ac8640e5f72f55470021ebd193b34a4597102",
          "url": "https://github.com/ibis-project/ibis/commit/5ed40e1d9eea4573cb5626de248759412c5980cb"
        },
        "date": 1684491151228,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5657309.198676555,
            "unit": "iter/sec",
            "range": "stddev: 3.4231638198764e-8",
            "extra": "mean: 176.762479278225 nsec\nrounds: 153823"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1930.2369013105435,
            "unit": "iter/sec",
            "range": "stddev: 0.00009570711024746151",
            "extra": "mean: 518.0711234569421 usec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 159.72034577436048,
            "unit": "iter/sec",
            "range": "stddev: 0.006152563054147764",
            "extra": "mean: 6.260943119999979 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 364.5559256356022,
            "unit": "iter/sec",
            "range": "stddev: 0.00008073925194255657",
            "extra": "mean: 2.74306335374059 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 109.24848778548316,
            "unit": "iter/sec",
            "range": "stddev: 0.00011597726693454404",
            "extra": "mean: 9.153444777776402 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.98935681804583,
            "unit": "iter/sec",
            "range": "stddev: 0.00021553753121199436",
            "extra": "mean: 11.23729888333358 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 249.40546467324944,
            "unit": "iter/sec",
            "range": "stddev: 0.00028645386408592503",
            "extra": "mean: 4.009535241379406 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1878.827055090906,
            "unit": "iter/sec",
            "range": "stddev: 0.00010270541667089414",
            "extra": "mean: 532.2469661538994 usec\nrounds: 325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 76.38944260624895,
            "unit": "iter/sec",
            "range": "stddev: 0.014992208293243487",
            "extra": "mean: 13.090814200000409 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6728873260736817,
            "unit": "iter/sec",
            "range": "stddev: 0.007780761343274758",
            "extra": "mean: 1.4861329100000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 26.31091488625625,
            "unit": "iter/sec",
            "range": "stddev: 0.0002822233612289497",
            "extra": "mean: 38.007040208334196 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1457974988777901,
            "unit": "iter/sec",
            "range": "stddev: 0.04588173386025749",
            "extra": "mean: 6.858828222 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 467.6146794667896,
            "unit": "iter/sec",
            "range": "stddev: 0.00004686793047923356",
            "extra": "mean: 2.138512848100229 msec\nrounds: 395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 243.6857887199044,
            "unit": "iter/sec",
            "range": "stddev: 0.00028426652628339374",
            "extra": "mean: 4.103645129463881 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7374.760980534184,
            "unit": "iter/sec",
            "range": "stddev: 0.00001517446346391503",
            "extra": "mean: 135.59761497891503 usec\nrounds: 3979"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7853856432236406,
            "unit": "iter/sec",
            "range": "stddev: 0.007976368610023796",
            "extra": "mean: 1.2732598419999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 583.7577837960539,
            "unit": "iter/sec",
            "range": "stddev: 0.000044740558236386074",
            "extra": "mean: 1.7130392566197759 msec\nrounds: 491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4063644457634787,
            "unit": "iter/sec",
            "range": "stddev: 0.002392163092832381",
            "extra": "mean: 711.0532429999864 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 88.23339775620003,
            "unit": "iter/sec",
            "range": "stddev: 0.0008045538931143262",
            "extra": "mean: 11.333576915660956 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1626280.582143736,
            "unit": "iter/sec",
            "range": "stddev: 2.2391050761351066e-7",
            "extra": "mean: 614.9000430674863 nsec\nrounds: 81295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7746194699940937,
            "unit": "iter/sec",
            "range": "stddev: 0.017060688838339548",
            "extra": "mean: 1.2909564486000136 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1526.2476177048638,
            "unit": "iter/sec",
            "range": "stddev: 0.000011835439525722708",
            "extra": "mean: 655.2016778927243 usec\nrounds: 1158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.17045163457711,
            "unit": "iter/sec",
            "range": "stddev: 0.00028922684208004514",
            "extra": "mean: 23.163992085712998 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4588097.581502662,
            "unit": "iter/sec",
            "range": "stddev: 2.077893725124989e-8",
            "extra": "mean: 217.95525972053204 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 73.13782924049075,
            "unit": "iter/sec",
            "range": "stddev: 0.01764606566607148",
            "extra": "mean: 13.672814880953256 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 236.1202963692009,
            "unit": "iter/sec",
            "range": "stddev: 0.00036467886062190974",
            "extra": "mean: 4.23512936150303 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3732937.278359312,
            "unit": "iter/sec",
            "range": "stddev: 2.05186093158616e-8",
            "extra": "mean: 267.88556180624266 nsec\nrounds: 121937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.44132232502473,
            "unit": "iter/sec",
            "range": "stddev: 0.00007973305068546118",
            "extra": "mean: 10.588585328765813 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 135.69731690594756,
            "unit": "iter/sec",
            "range": "stddev: 0.00012055257273670655",
            "extra": "mean: 7.369342466020198 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1882.5508116324481,
            "unit": "iter/sec",
            "range": "stddev: 0.00010146836345209718",
            "extra": "mean: 531.194161571051 usec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8702.400046828638,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045649509749734075",
            "extra": "mean: 114.9108285781948 usec\nrounds: 4241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 213.62515414189613,
            "unit": "iter/sec",
            "range": "stddev: 0.00047934150224784676",
            "extra": "mean: 4.6810966808514065 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.12336926302957,
            "unit": "iter/sec",
            "range": "stddev: 0.0004513644609368321",
            "extra": "mean: 25.560170783781917 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 84.56950678660016,
            "unit": "iter/sec",
            "range": "stddev: 0.0010481516706728553",
            "extra": "mean: 11.824593024095153 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.74146841951934,
            "unit": "iter/sec",
            "range": "stddev: 0.000716139243380015",
            "extra": "mean: 11.662967971427308 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.50817298291207,
            "unit": "iter/sec",
            "range": "stddev: 0.0009004767285579944",
            "extra": "mean: 11.694788522727993 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1878.5606584008153,
            "unit": "iter/sec",
            "range": "stddev: 0.00011281427688176611",
            "extra": "mean: 532.3224435304005 usec\nrounds: 1337"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.17159047924791,
            "unit": "iter/sec",
            "range": "stddev: 0.0003160715244410616",
            "extra": "mean: 12.473246370967855 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 85.01837516482814,
            "unit": "iter/sec",
            "range": "stddev: 0.0010277976771648398",
            "extra": "mean: 11.762163156626604 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9531574.491674632,
            "unit": "iter/sec",
            "range": "stddev: 6.26933098193307e-9",
            "extra": "mean: 104.91446097111736 nsec\nrounds: 96145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.189765383456577,
            "unit": "iter/sec",
            "range": "stddev: 0.0013638590035692955",
            "extra": "mean: 456.6699279999966 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 84.47268693980268,
            "unit": "iter/sec",
            "range": "stddev: 0.0010522704543122917",
            "extra": "mean: 11.838145988094643 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5005357.8783180965,
            "unit": "iter/sec",
            "range": "stddev: 2.3612041895493098e-8",
            "extra": "mean: 199.78591427633236 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1817.0418685939758,
            "unit": "iter/sec",
            "range": "stddev: 0.00019886717817501918",
            "extra": "mean: 550.3450510877873 usec\nrounds: 1057"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.15462822877198,
            "unit": "iter/sec",
            "range": "stddev: 0.0011396419358503545",
            "extra": "mean: 31.099722033333894 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 240.82066908702822,
            "unit": "iter/sec",
            "range": "stddev: 0.0003294854964009074",
            "extra": "mean: 4.152467492890397 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 89.15025155980173,
            "unit": "iter/sec",
            "range": "stddev: 0.00011654476445589258",
            "extra": "mean: 11.217018264151536 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1406119.2480435222,
            "unit": "iter/sec",
            "range": "stddev: 2.199427918666242e-7",
            "extra": "mean: 711.1772357795418 nsec\nrounds: 103083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.6293558498063,
            "unit": "iter/sec",
            "range": "stddev: 0.0007692877471485579",
            "extra": "mean: 48.474611000003165 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.322402739662696,
            "unit": "iter/sec",
            "range": "stddev: 0.0009002147962210408",
            "extra": "mean: 32.97891689473431 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.327536683758531,
            "unit": "iter/sec",
            "range": "stddev: 0.0003495334633058247",
            "extra": "mean: 136.47151057141724 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 139.78941661350555,
            "unit": "iter/sec",
            "range": "stddev: 0.0000965635511583106",
            "extra": "mean: 7.1536173783801775 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 233.52142541864723,
            "unit": "iter/sec",
            "range": "stddev: 0.0003193075622666638",
            "extra": "mean: 4.282262315790693 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 242.06460740525947,
            "unit": "iter/sec",
            "range": "stddev: 0.0003531741511245036",
            "extra": "mean: 4.131128506224874 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10620.209407607206,
            "unit": "iter/sec",
            "range": "stddev: 0.000017498459293482466",
            "extra": "mean: 94.16010189815134 usec\nrounds: 5005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.08292427297634,
            "unit": "iter/sec",
            "range": "stddev: 0.0006064742563201892",
            "extra": "mean: 22.68452051428491 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 85.87987538222832,
            "unit": "iter/sec",
            "range": "stddev: 0.000978811487557462",
            "extra": "mean: 11.644171530865268 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5219973.367462367,
            "unit": "iter/sec",
            "range": "stddev: 1.4308010212734502e-8",
            "extra": "mean: 191.57185862921628 nsec\nrounds: 52076"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12150.125555600962,
            "unit": "iter/sec",
            "range": "stddev: 0.000003905511856869995",
            "extra": "mean: 82.30367623970932 usec\nrounds: 4840"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 872687.6648387128,
            "unit": "iter/sec",
            "range": "stddev: 2.4140686165485587e-7",
            "extra": "mean: 1.1458853382381848 usec\nrounds: 124985"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 96.87955687485152,
            "unit": "iter/sec",
            "range": "stddev: 0.00008831226441868964",
            "extra": "mean: 10.322095107142104 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 85.71221767469034,
            "unit": "iter/sec",
            "range": "stddev: 0.0010393401355516753",
            "extra": "mean: 11.66694815662536 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.55226169605095,
            "unit": "iter/sec",
            "range": "stddev: 0.0010014023597829562",
            "extra": "mean: 11.421749485714372 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 67.96164482970342,
            "unit": "iter/sec",
            "range": "stddev: 0.020636247575376895",
            "extra": "mean: 14.714181837502238 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1552357.4932876006,
            "unit": "iter/sec",
            "range": "stddev: 2.7914015824935966e-7",
            "extra": "mean: 644.1815138098045 nsec\nrounds: 153823"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 82.5794962249987,
            "unit": "iter/sec",
            "range": "stddev: 0.001111437156840551",
            "extra": "mean: 12.109543478872387 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 163.90361377657194,
            "unit": "iter/sec",
            "range": "stddev: 0.0001109312301482988",
            "extra": "mean: 6.101146746911678 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.49435075967736,
            "unit": "iter/sec",
            "range": "stddev: 0.0009435790852120372",
            "extra": "mean: 11.30015635366017 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.96176807384121,
            "unit": "iter/sec",
            "range": "stddev: 0.0009141732164607266",
            "extra": "mean: 11.633078546511506 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 72.25955489464233,
            "unit": "iter/sec",
            "range": "stddev: 0.0007873360662370659",
            "extra": "mean: 13.839000274192731 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.09187658774528,
            "unit": "iter/sec",
            "range": "stddev: 0.0009600641550105575",
            "extra": "mean: 18.83527319565157 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.495830541040988,
            "unit": "iter/sec",
            "range": "stddev: 0.00022130844286960322",
            "extra": "mean: 60.621379294121546 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 646.2335471153748,
            "unit": "iter/sec",
            "range": "stddev: 0.000018547434951795267",
            "extra": "mean: 1.5474281774193714 msec\nrounds: 558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 985.7232186191776,
            "unit": "iter/sec",
            "range": "stddev: 0.00001550565541540057",
            "extra": "mean: 1.0144835600005666 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.07075025218387,
            "unit": "iter/sec",
            "range": "stddev: 0.0009844579270313234",
            "extra": "mean: 12.184608973687192 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 189.7350699864713,
            "unit": "iter/sec",
            "range": "stddev: 0.0044669118935203745",
            "extra": "mean: 5.27050692352923 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3874.3568595872184,
            "unit": "iter/sec",
            "range": "stddev: 0.000028099701410875812",
            "extra": "mean: 258.1073546504805 usec\nrounds: 1720"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1860.5092794497168,
            "unit": "iter/sec",
            "range": "stddev: 0.00010086163344540779",
            "extra": "mean: 537.4872412868428 usec\nrounds: 1119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.8732091662477,
            "unit": "iter/sec",
            "range": "stddev: 0.0010621205043789452",
            "extra": "mean: 12.365034234567613 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1828.3270268345216,
            "unit": "iter/sec",
            "range": "stddev: 0.00010861251928276509",
            "extra": "mean: 546.9481035519956 usec\nrounds: 1661"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1873.9292099829236,
            "unit": "iter/sec",
            "range": "stddev: 0.00010065925880726998",
            "extra": "mean: 533.6380876463912 usec\nrounds: 1198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 203.82544057124463,
            "unit": "iter/sec",
            "range": "stddev: 0.0003326714864032317",
            "extra": "mean: 4.906158903409619 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.49608908851038,
            "unit": "iter/sec",
            "range": "stddev: 0.03231707423484591",
            "extra": "mean: 30.772933852940763 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.42565317147277,
            "unit": "iter/sec",
            "range": "stddev: 0.0008547411238286355",
            "extra": "mean: 10.9378491190482 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 232.15276734919766,
            "unit": "iter/sec",
            "range": "stddev: 0.00043350275041744205",
            "extra": "mean: 4.307508419642606 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2246062.5749240587,
            "unit": "iter/sec",
            "range": "stddev: 4.917692336069476e-8",
            "extra": "mean: 445.22357086733234 nsec\nrounds: 102020"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 142.84686836780602,
            "unit": "iter/sec",
            "range": "stddev: 0.00437120422688974",
            "extra": "mean: 7.00050348618895 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1686776889401314,
            "unit": "iter/sec",
            "range": "stddev: 0.0023514607598328365",
            "extra": "mean: 855.6679137999936 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 266.53024141637775,
            "unit": "iter/sec",
            "range": "stddev: 0.00004602533471358093",
            "extra": "mean: 3.7519194620687877 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 149.05142687330195,
            "unit": "iter/sec",
            "range": "stddev: 0.00007217732035153196",
            "extra": "mean: 6.709093773721663 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1833.6445640421775,
            "unit": "iter/sec",
            "range": "stddev: 0.000100505285107666",
            "extra": "mean: 545.3619636051766 usec\nrounds: 1154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143998.05898054867,
            "unit": "iter/sec",
            "range": "stddev: 7.944041468568097e-7",
            "extra": "mean: 6.944538051968329 usec\nrounds: 34361"
          }
        ]
      }
    ]
  }
}