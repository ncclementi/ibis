window.BENCHMARK_DATA = {
  "lastUpdate": 1682946769899,
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
          "id": "433f7b77d5879850421125522a6532fb012122e9",
          "message": "test(refactor): use specific exceptions",
          "timestamp": "2023-05-01T06:06:14-07:00",
          "tree_id": "f20e475b6e6a784bd9e0ab93089277b1776f5bed",
          "url": "https://github.com/ibis-project/ibis/commit/433f7b77d5879850421125522a6532fb012122e9"
        },
        "date": 1682946684244,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 276.0937174295588,
            "unit": "iter/sec",
            "range": "stddev: 0.00027030936772593026",
            "extra": "mean: 3.6219585483872336 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.4128656413345,
            "unit": "iter/sec",
            "range": "stddev: 0.00002606565662601225",
            "extra": "mean: 5.091316175927495 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2386.1076735502097,
            "unit": "iter/sec",
            "range": "stddev: 0.00007830373134542961",
            "extra": "mean: 419.09257117141465 usec\nrounds: 555"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 697.0586443936271,
            "unit": "iter/sec",
            "range": "stddev: 0.000032540220004833636",
            "extra": "mean: 1.4345995247930714 msec\nrounds: 484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.465472542007,
            "unit": "iter/sec",
            "range": "stddev: 0.0006016414890138679",
            "extra": "mean: 9.85556933750047 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.684435928352435,
            "unit": "iter/sec",
            "range": "stddev: 0.00014148520556185224",
            "extra": "mean: 17.958339405407127 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11803.303705624165,
            "unit": "iter/sec",
            "range": "stddev: 0.000010848007779821277",
            "extra": "mean: 84.7220426534911 usec\nrounds: 4900"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.543454859232112,
            "unit": "iter/sec",
            "range": "stddev: 0.00018552905011623224",
            "extra": "mean: 117.04866666666982 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.90055910176592,
            "unit": "iter/sec",
            "range": "stddev: 0.0006474582411861776",
            "extra": "mean: 9.532837656564652 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1655642.2141770558,
            "unit": "iter/sec",
            "range": "stddev: 8.230162965981468e-8",
            "extra": "mean: 603.9952300304534 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 256.1996782536248,
            "unit": "iter/sec",
            "range": "stddev: 0.00412431717713359",
            "extra": "mean: 3.9032055263162753 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7301094.51930542,
            "unit": "iter/sec",
            "range": "stddev: 4.7191476355271904e-9",
            "extra": "mean: 136.96576552401515 nsec\nrounds: 61729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1166.1749915267976,
            "unit": "iter/sec",
            "range": "stddev: 0.000013958101638237722",
            "extra": "mean: 857.5042401576153 usec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 89.3360674966317,
            "unit": "iter/sec",
            "range": "stddev: 0.0109758295825008",
            "extra": "mean: 11.19368725333364 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.5646185621341,
            "unit": "iter/sec",
            "range": "stddev: 0.0007396119540691651",
            "extra": "mean: 10.464123804876813 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 27.529270163858627,
            "unit": "iter/sec",
            "range": "stddev: 0.015122402207956197",
            "extra": "mean: 36.324973166663696 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.956962311775147,
            "unit": "iter/sec",
            "range": "stddev: 0.00010488409317179726",
            "extra": "mean: 52.75106757894689 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9301992049168394,
            "unit": "iter/sec",
            "range": "stddev: 0.003230481653985042",
            "extra": "mean: 1.0750385452000046 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1820454.3408411748,
            "unit": "iter/sec",
            "range": "stddev: 7.992673028158918e-8",
            "extra": "mean: 549.3134200432247 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5921349.201374307,
            "unit": "iter/sec",
            "range": "stddev: 7.544387969546007e-9",
            "extra": "mean: 168.880430116745 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.29210503361122,
            "unit": "iter/sec",
            "range": "stddev: 0.00024101983865690182",
            "extra": "mean: 6.1239947870974225 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 761.2225221978862,
            "unit": "iter/sec",
            "range": "stddev: 0.000021276672700940786",
            "extra": "mean: 1.3136763178166209 msec\nrounds: 623"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.49363377015763,
            "unit": "iter/sec",
            "range": "stddev: 0.000641300257300681",
            "extra": "mean: 10.257079989012528 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9234736370653311,
            "unit": "iter/sec",
            "range": "stddev: 0.005715267696371401",
            "extra": "mean: 1.0828679453999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.33707686279541,
            "unit": "iter/sec",
            "range": "stddev: 0.009519968582077461",
            "extra": "mean: 8.450436891891783 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 537.4417092701565,
            "unit": "iter/sec",
            "range": "stddev: 0.000057762963171533944",
            "extra": "mean: 1.8606669016403579 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.76765345781652,
            "unit": "iter/sec",
            "range": "stddev: 0.00032664176490776036",
            "extra": "mean: 3.9406125500003046 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 184.24187181488827,
            "unit": "iter/sec",
            "range": "stddev: 0.003847095978515628",
            "extra": "mean: 5.427647853060901 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.20048256645548,
            "unit": "iter/sec",
            "range": "stddev: 0.0007000271323425603",
            "extra": "mean: 9.88137580612156 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.1180753646341,
            "unit": "iter/sec",
            "range": "stddev: 0.0005850667139503485",
            "extra": "mean: 9.988206388885915 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141384.70972989788,
            "unit": "iter/sec",
            "range": "stddev: 2.881943093140391e-7",
            "extra": "mean: 7.072900612169487 usec\nrounds: 41323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3447121212764455,
            "unit": "iter/sec",
            "range": "stddev: 0.0012226104491121208",
            "extra": "mean: 743.6535926000033 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5267298659213453,
            "unit": "iter/sec",
            "range": "stddev: 0.0014445976345812492",
            "extra": "mean: 395.7684647999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 281.5828400001616,
            "unit": "iter/sec",
            "range": "stddev: 0.0002758319554205814",
            "extra": "mean: 3.5513527741940036 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.1181780640772,
            "unit": "iter/sec",
            "range": "stddev: 0.0002330423424542453",
            "extra": "mean: 3.557222826664959 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8022938365108312,
            "unit": "iter/sec",
            "range": "stddev: 0.0020589218324385873",
            "extra": "mean: 1.2464261277999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2361.848022852796,
            "unit": "iter/sec",
            "range": "stddev: 0.00007878869223888525",
            "extra": "mean: 423.39726786998517 usec\nrounds: 1329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13166.607962105856,
            "unit": "iter/sec",
            "range": "stddev: 0.000002922486301143209",
            "extra": "mean: 75.94970571600895 usec\nrounds: 7068"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.682538306821585,
            "unit": "iter/sec",
            "range": "stddev: 0.001805118210935525",
            "extra": "mean: 594.3401085999994 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2391.6697345924463,
            "unit": "iter/sec",
            "range": "stddev: 0.00007866082946443356",
            "extra": "mean: 418.11793055549344 usec\nrounds: 1368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 430.2297077751304,
            "unit": "iter/sec",
            "range": "stddev: 0.000032554628029164955",
            "extra": "mean: 2.324339723473195 msec\nrounds: 311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.82657967263401,
            "unit": "iter/sec",
            "range": "stddev: 0.0002441362140845918",
            "extra": "mean: 20.069609565218155 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.48708939293013,
            "unit": "iter/sec",
            "range": "stddev: 0.00021533287394216532",
            "extra": "mean: 15.040514017542998 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.63076733422241,
            "unit": "iter/sec",
            "range": "stddev: 0.00006202863012615492",
            "extra": "mean: 9.557418199999399 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.34155256905306,
            "unit": "iter/sec",
            "range": "stddev: 0.00037532013358559246",
            "extra": "mean: 21.578905853659318 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 87.96499257190956,
            "unit": "iter/sec",
            "range": "stddev: 0.013079296064082317",
            "extra": "mean: 11.36815874999956 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.47696029209281,
            "unit": "iter/sec",
            "range": "stddev: 0.00012658411004105519",
            "extra": "mean: 9.391703118277897 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.12814368211178,
            "unit": "iter/sec",
            "range": "stddev: 0.00071028974147399",
            "extra": "mean: 9.987202031576796 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.49437665527337,
            "unit": "iter/sec",
            "range": "stddev: 0.0008772464042644489",
            "extra": "mean: 10.050819288659751 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 123.31737579086742,
            "unit": "iter/sec",
            "range": "stddev: 0.00011675060333048707",
            "extra": "mean: 8.109157315315313 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.10109518321494,
            "unit": "iter/sec",
            "range": "stddev: 0.00005735373484701349",
            "extra": "mean: 6.365327999997561 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.9278843599855,
            "unit": "iter/sec",
            "range": "stddev: 0.00007449979982809605",
            "extra": "mean: 10.007216768420186 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.17932992957654,
            "unit": "iter/sec",
            "range": "stddev: 0.0006264582522111584",
            "extra": "mean: 9.98209910869811 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.36006889771295,
            "unit": "iter/sec",
            "range": "stddev: 0.0006120192997550782",
            "extra": "mean: 9.674916151513198 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 191.43941095084588,
            "unit": "iter/sec",
            "range": "stddev: 0.00005681151736660989",
            "extra": "mean: 5.2235848148151725 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1623468.7236216713,
            "unit": "iter/sec",
            "range": "stddev: 8.806273057484018e-8",
            "extra": "mean: 615.9650539920332 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.83942440980625,
            "unit": "iter/sec",
            "range": "stddev: 0.0004987601060587981",
            "extra": "mean: 22.810518465117312 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1061649.3975704303,
            "unit": "iter/sec",
            "range": "stddev: 1.326959786061123e-7",
            "extra": "mean: 941.9305490951023 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 117.45955432175334,
            "unit": "iter/sec",
            "range": "stddev: 0.00014053363707740128",
            "extra": "mean: 8.513568826089113 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1780.977722722886,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065561916815014035",
            "extra": "mean: 561.4893365825646 usec\nrounds: 1334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2389.7633082093894,
            "unit": "iter/sec",
            "range": "stddev: 0.00007637566039004937",
            "extra": "mean: 418.4514828580592 usec\nrounds: 1371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4614381.905146864,
            "unit": "iter/sec",
            "range": "stddev: 1.2683025156492632e-8",
            "extra": "mean: 216.71374857033857 nsec\nrounds: 138909"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 411.32501073192157,
            "unit": "iter/sec",
            "range": "stddev: 0.0001208917714896605",
            "extra": "mean: 2.431167504792806 msec\nrounds: 313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 269.2713006872465,
            "unit": "iter/sec",
            "range": "stddev: 0.00031551097712243355",
            "extra": "mean: 3.7137266297884493 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 172.87306760673087,
            "unit": "iter/sec",
            "range": "stddev: 0.00006653656888217828",
            "extra": "mean: 5.784591051943968 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.67672648012044,
            "unit": "iter/sec",
            "range": "stddev: 0.00011851541739770825",
            "extra": "mean: 9.035323250002504 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6368669.217454658,
            "unit": "iter/sec",
            "range": "stddev: 4.096671233965197e-9",
            "extra": "mean: 157.01867468000955 nsec\nrounds: 62898"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1807491.7181950915,
            "unit": "iter/sec",
            "range": "stddev: 9.772522469665216e-8",
            "extra": "mean: 553.2528807371637 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2298.5483656141155,
            "unit": "iter/sec",
            "range": "stddev: 0.00009806526896771921",
            "extra": "mean: 435.0571930353202 usec\nrounds: 1321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.00136234963156,
            "unit": "iter/sec",
            "range": "stddev: 0.00024861852771991365",
            "extra": "mean: 3.7313243157899 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7984.848755495487,
            "unit": "iter/sec",
            "range": "stddev: 0.000019808043264789528",
            "extra": "mean: 125.23718740593058 usec\nrounds: 4669"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2311.866828790312,
            "unit": "iter/sec",
            "range": "stddev: 0.00008294926265189732",
            "extra": "mean: 432.5508664888157 usec\nrounds: 1498"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 234.26157454454244,
            "unit": "iter/sec",
            "range": "stddev: 0.009395677451054803",
            "extra": "mean: 4.268732513832994 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.27869183655457,
            "unit": "iter/sec",
            "range": "stddev: 0.0008041642115387362",
            "extra": "mean: 23.106058837835942 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2310.367861713556,
            "unit": "iter/sec",
            "range": "stddev: 0.00009488461950600168",
            "extra": "mean: 432.83150556739434 usec\nrounds: 1347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2293.113201006416,
            "unit": "iter/sec",
            "range": "stddev: 0.00008603513319112267",
            "extra": "mean: 436.0883708493387 usec\nrounds: 1777"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.96211272723188,
            "unit": "iter/sec",
            "range": "stddev: 0.0008293520588799449",
            "extra": "mean: 10.003790163266308 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9893.644973013721,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016943418871195177",
            "extra": "mean: 101.07498325719568 usec\nrounds: 4778"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6477470.125183474,
            "unit": "iter/sec",
            "range": "stddev: 8.040980623752658e-9",
            "extra": "mean: 154.38126007129597 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.75767650995107,
            "unit": "iter/sec",
            "range": "stddev: 0.018040481435542776",
            "extra": "mean: 12.382723763440355 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 274.55623779763033,
            "unit": "iter/sec",
            "range": "stddev: 0.00028678628981391584",
            "extra": "mean: 3.6422410505824274 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.18599879693984,
            "unit": "iter/sec",
            "range": "stddev: 0.0007614571881079328",
            "extra": "mean: 9.882790226805993 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4659.1046306433645,
            "unit": "iter/sec",
            "range": "stddev: 0.000029790874272797323",
            "extra": "mean: 214.63351422136066 usec\nrounds: 2215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17860414256730825,
            "unit": "iter/sec",
            "range": "stddev: 0.067697058882055",
            "extra": "mean: 5.598974277000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11760006.353591437,
            "unit": "iter/sec",
            "range": "stddev: 2.2094400204156488e-8",
            "extra": "mean: 85.0339676639802 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.70063270038372,
            "unit": "iter/sec",
            "range": "stddev: 0.0005732865252927828",
            "extra": "mean: 9.460681307694477 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.650757070965593,
            "unit": "iter/sec",
            "range": "stddev: 0.0007742982241794741",
            "extra": "mean: 34.9030916538464 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.594054478851724,
            "unit": "iter/sec",
            "range": "stddev: 0.00011278557538444495",
            "extra": "mean: 16.50326931578767 msec\nrounds: 57"
          }
        ]
      }
    ]
  }
}