window.BENCHMARK_DATA = {
  "lastUpdate": 1683042474011,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "bmil@google.com",
            "name": "Brenton Milne",
            "username": "sudonhim"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "ef3cc2242cce1854bfb923f4678f5a4bb3774504",
          "message": "test(bigquery): unit test float to int truncation",
          "timestamp": "2023-05-02T08:37:14-07:00",
          "tree_id": "0b63b821db18ad46b75c3fd9b3865b09934ecaaa",
          "url": "https://github.com/ibis-project/ibis/commit/ef3cc2242cce1854bfb923f4678f5a4bb3774504"
        },
        "date": 1683042049044,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9314660175707212,
            "unit": "iter/sec",
            "range": "stddev: 0.006029961005781756",
            "extra": "mean: 1.0735764710000013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.87451411562694,
            "unit": "iter/sec",
            "range": "stddev: 0.0005667460229003284",
            "extra": "mean: 14.953379672725347 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3382951246046961,
            "unit": "iter/sec",
            "range": "stddev: 0.0002869085098290657",
            "extra": "mean: 747.2193402000016 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.23015920444104,
            "unit": "iter/sec",
            "range": "stddev: 0.00012444883351913873",
            "extra": "mean: 9.413522557897043 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1818415008151757,
            "unit": "iter/sec",
            "range": "stddev: 0.06358126135271086",
            "extra": "mean: 5.499294690800002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.1644713755985,
            "unit": "iter/sec",
            "range": "stddev: 0.00003217154239724253",
            "extra": "mean: 1.8547216166685605 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 192.35421652352343,
            "unit": "iter/sec",
            "range": "stddev: 0.00006711709776467616",
            "extra": "mean: 5.198742289476705 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6357658.081033085,
            "unit": "iter/sec",
            "range": "stddev: 4.518863245374911e-9",
            "extra": "mean: 157.29062293917585 nsec\nrounds: 48544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4639290.432704523,
            "unit": "iter/sec",
            "range": "stddev: 1.1695136901870032e-8",
            "extra": "mean: 215.55020417562767 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 750.99048513744,
            "unit": "iter/sec",
            "range": "stddev: 0.00011313859816470904",
            "extra": "mean: 1.3315747932771589 msec\nrounds: 595"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 243.22046826550778,
            "unit": "iter/sec",
            "range": "stddev: 0.004240479807079367",
            "extra": "mean: 4.111496072396201 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2358.854060440294,
            "unit": "iter/sec",
            "range": "stddev: 0.00007818090631026463",
            "extra": "mean: 423.9346625002075 usec\nrounds: 560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.952070752334,
            "unit": "iter/sec",
            "range": "stddev: 0.00008751117044411134",
            "extra": "mean: 6.136773809520164 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.16685488821435,
            "unit": "iter/sec",
            "range": "stddev: 0.00026886672834561113",
            "extra": "mean: 3.701416298508436 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1181.6447060053947,
            "unit": "iter/sec",
            "range": "stddev: 0.00003226840784011938",
            "extra": "mean: 846.2780689641871 usec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 404.18647406143276,
            "unit": "iter/sec",
            "range": "stddev: 0.00003682549081345534",
            "extra": "mean: 2.4741055531908 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11720.56890815831,
            "unit": "iter/sec",
            "range": "stddev: 0.000013206809269808877",
            "extra": "mean: 85.3200905037922 usec\nrounds: 4939"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.26391892570848,
            "unit": "iter/sec",
            "range": "stddev: 0.0006512735428128004",
            "extra": "mean: 9.59104559183636 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.9336212982106,
            "unit": "iter/sec",
            "range": "stddev: 0.00012649627610125186",
            "extra": "mean: 6.496306599990476 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.07717155525285,
            "unit": "iter/sec",
            "range": "stddev: 0.0002913673851206628",
            "extra": "mean: 3.622175619833401 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.91690880777156,
            "unit": "iter/sec",
            "range": "stddev: 0.0003151778546897092",
            "extra": "mean: 3.732500514618481 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5700293.577957199,
            "unit": "iter/sec",
            "range": "stddev: 9.122975575349227e-9",
            "extra": "mean: 175.4295610086569 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1742.6211414851955,
            "unit": "iter/sec",
            "range": "stddev: 0.00005244763486045248",
            "extra": "mean: 573.848196945277 usec\nrounds: 1244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 115.50991117248681,
            "unit": "iter/sec",
            "range": "stddev: 0.000105495561960015",
            "extra": "mean: 8.657265769226814 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6354614.350421051,
            "unit": "iter/sec",
            "range": "stddev: 2.390938072849663e-7",
            "extra": "mean: 157.36596193842104 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.83900571475195,
            "unit": "iter/sec",
            "range": "stddev: 0.0007950501752320728",
            "extra": "mean: 10.016125389480342 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2544371.7247545975,
            "unit": "iter/sec",
            "range": "stddev: 1.7444170275693735e-8",
            "extra": "mean: 393.0243329897996 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 250.1668570590546,
            "unit": "iter/sec",
            "range": "stddev: 0.0004462991296183536",
            "extra": "mean: 3.99733206770847 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9860.68696705195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022802329414383613",
            "extra": "mean: 101.4128126510206 usec\nrounds: 5391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1631314.4846470547,
            "unit": "iter/sec",
            "range": "stddev: 8.390086310625998e-8",
            "extra": "mean: 613.0025874295823 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.44414239772038,
            "unit": "iter/sec",
            "range": "stddev: 0.023346774345708924",
            "extra": "mean: 26.7064468823535 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7348912.845481369,
            "unit": "iter/sec",
            "range": "stddev: 4.341587487743727e-9",
            "extra": "mean: 136.07454885186849 nsec\nrounds: 71429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 124.47689506340497,
            "unit": "iter/sec",
            "range": "stddev: 0.0001029675734511355",
            "extra": "mean: 8.033619407767432 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.42130344031811,
            "unit": "iter/sec",
            "range": "stddev: 0.0007601660148049458",
            "extra": "mean: 9.958046407895063 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.90468938016306,
            "unit": "iter/sec",
            "range": "stddev: 0.0008218929091989929",
            "extra": "mean: 10.009540154764332 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.29179744021891,
            "unit": "iter/sec",
            "range": "stddev: 0.015587976646070867",
            "extra": "mean: 11.326080439998805 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.14423754305639,
            "unit": "iter/sec",
            "range": "stddev: 0.0007177047629396194",
            "extra": "mean: 9.985597020198554 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2239.789444354787,
            "unit": "iter/sec",
            "range": "stddev: 0.00008365200773801313",
            "extra": "mean: 446.47053879123376 usec\nrounds: 1637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2250.896438179928,
            "unit": "iter/sec",
            "range": "stddev: 0.00008853213333024028",
            "extra": "mean: 444.26744075733615 usec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141272.2731701016,
            "unit": "iter/sec",
            "range": "stddev: 3.0421606618363063e-7",
            "extra": "mean: 7.078529831511458 usec\nrounds: 39371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1081576.976706114,
            "unit": "iter/sec",
            "range": "stddev: 2.1083903203663763e-7",
            "extra": "mean: 924.5758938447891 nsec\nrounds: 86957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 270.9451633838503,
            "unit": "iter/sec",
            "range": "stddev: 0.0002758306305294251",
            "extra": "mean: 3.69078372727138 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.496807375495905,
            "unit": "iter/sec",
            "range": "stddev: 0.025218305866991052",
            "extra": "mean: 26.668937170728253 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.07480234010634,
            "unit": "iter/sec",
            "range": "stddev: 0.00013010809212674263",
            "extra": "mean: 9.084731280372644 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2317.0277976636785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000793450195816259",
            "extra": "mean: 431.5873987391636 usec\nrounds: 1269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2324.294523585072,
            "unit": "iter/sec",
            "range": "stddev: 0.00008004422221565315",
            "extra": "mean: 430.2380743287066 usec\nrounds: 1601"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2358.502379022387,
            "unit": "iter/sec",
            "range": "stddev: 0.00007510442412812386",
            "extra": "mean: 423.9978763195083 usec\nrounds: 1326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.936403113918516,
            "unit": "iter/sec",
            "range": "stddev: 0.00016989578545619486",
            "extra": "mean: 17.877445533339497 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.059221083927966,
            "unit": "iter/sec",
            "range": "stddev: 0.00025092767309753183",
            "extra": "mean: 16.93215693750716 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.68374445670668,
            "unit": "iter/sec",
            "range": "stddev: 0.0006940028211489992",
            "extra": "mean: 9.834413606058384 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.20018755142061,
            "unit": "iter/sec",
            "range": "stddev: 0.0007040134074927191",
            "extra": "mean: 9.689904870586977 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.984388458152022,
            "unit": "iter/sec",
            "range": "stddev: 0.027197026490909434",
            "extra": "mean: 38.48464633333606 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4754.060620098499,
            "unit": "iter/sec",
            "range": "stddev: 0.00002005319173625118",
            "extra": "mean: 210.34649742839858 usec\nrounds: 2139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 50.03840046928376,
            "unit": "iter/sec",
            "range": "stddev: 0.00023845512156621352",
            "extra": "mean: 19.984651600001747 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.23650968109735,
            "unit": "iter/sec",
            "range": "stddev: 0.0007578326576577602",
            "extra": "mean: 9.976404836735657 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.473076450114349,
            "unit": "iter/sec",
            "range": "stddev: 0.004751175097261834",
            "extra": "mean: 404.3546652000032 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 98.4376284554024,
            "unit": "iter/sec",
            "range": "stddev: 0.0007264640525343273",
            "extra": "mean: 10.158716902175822 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7892250731202282,
            "unit": "iter/sec",
            "range": "stddev: 0.0027376353317570437",
            "extra": "mean: 1.267065674999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8111.334515862219,
            "unit": "iter/sec",
            "range": "stddev: 0.000011934850810335517",
            "extra": "mean: 123.28427560772371 usec\nrounds: 3788"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.55981531256657,
            "unit": "iter/sec",
            "range": "stddev: 0.00003018756011378367",
            "extra": "mean: 7.487281991665876 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 277.358192277364,
            "unit": "iter/sec",
            "range": "stddev: 0.00026371541450399366",
            "extra": "mean: 3.6054460543930107 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6613030743786132,
            "unit": "iter/sec",
            "range": "stddev: 0.0012925132653589012",
            "extra": "mean: 601.9371272000058 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1864993.0759529246,
            "unit": "iter/sec",
            "range": "stddev: 1.0395165996231414e-7",
            "extra": "mean: 536.1950201820705 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11809378.027099023,
            "unit": "iter/sec",
            "range": "stddev: 3.635225706254822e-9",
            "extra": "mean: 84.67846466636692 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.66022450141526,
            "unit": "iter/sec",
            "range": "stddev: 0.0003275652145900004",
            "extra": "mean: 3.5885997070059825 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 271.93045710074955,
            "unit": "iter/sec",
            "range": "stddev: 0.00026715986542642887",
            "extra": "mean: 3.6774108007677215 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.216018445245204,
            "unit": "iter/sec",
            "range": "stddev: 0.0003496706429876288",
            "extra": "mean: 38.144617653843994 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.2403458125975,
            "unit": "iter/sec",
            "range": "stddev: 0.00006376608465924713",
            "extra": "mean: 9.593214529408723 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.875243511750863,
            "unit": "iter/sec",
            "range": "stddev: 0.000085720632716752",
            "extra": "mean: 52.97944894737096 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.470088990312469,
            "unit": "iter/sec",
            "range": "stddev: 0.00019462015010033586",
            "extra": "mean: 118.06251399999861 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.27961635335905,
            "unit": "iter/sec",
            "range": "stddev: 0.0008410402704551397",
            "extra": "mean: 10.606746597822482 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.2682965447264,
            "unit": "iter/sec",
            "range": "stddev: 0.00006433091861683156",
            "extra": "mean: 10.07370968181608 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 683.8448843532449,
            "unit": "iter/sec",
            "range": "stddev: 0.000047147817676308337",
            "extra": "mean: 1.4623199250013588 msec\nrounds: 560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.36767624007297,
            "unit": "iter/sec",
            "range": "stddev: 0.000029384297956666937",
            "extra": "mean: 5.092487822575399 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 82.99804281684038,
            "unit": "iter/sec",
            "range": "stddev: 0.01746192910047667",
            "extra": "mean: 12.04847688043433 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13354.489774801192,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023870320544942486",
            "extra": "mean: 74.8811835467437 usec\nrounds: 7257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9248363725987766,
            "unit": "iter/sec",
            "range": "stddev: 0.007471272347375663",
            "extra": "mean: 1.0812723522000056 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 100.56457275549043,
            "unit": "iter/sec",
            "range": "stddev: 0.0007480350111111179",
            "extra": "mean: 9.943859677417104 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.02688427722148,
            "unit": "iter/sec",
            "range": "stddev: 0.0006810127441382136",
            "extra": "mean: 22.71339470000555 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.92567720826068,
            "unit": "iter/sec",
            "range": "stddev: 0.0008075274444234405",
            "extra": "mean: 10.211826239131113 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 94.13128846269902,
            "unit": "iter/sec",
            "range": "stddev: 0.0008597104231033111",
            "extra": "mean: 10.623460236563803 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2556017.6774578146,
            "unit": "iter/sec",
            "range": "stddev: 1.570774440002917e-8",
            "extra": "mean: 391.23360093267615 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 169.70736132578722,
            "unit": "iter/sec",
            "range": "stddev: 0.0002887068823049229",
            "extra": "mean: 5.892496307689918 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2277.597793936263,
            "unit": "iter/sec",
            "range": "stddev: 0.00008681473593262113",
            "extra": "mean: 439.059083505586 usec\nrounds: 1449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 417.2736522808675,
            "unit": "iter/sec",
            "range": "stddev: 0.00005328517379061919",
            "extra": "mean: 2.3965088486509534 msec\nrounds: 370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.13653609007706,
            "unit": "iter/sec",
            "range": "stddev: 0.00083397073513275",
            "extra": "mean: 10.622868033333233 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 175.02453935759928,
            "unit": "iter/sec",
            "range": "stddev: 0.004030019462902351",
            "extra": "mean: 5.713484541483992 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2299.723270652684,
            "unit": "iter/sec",
            "range": "stddev: 0.00007880741495162354",
            "extra": "mean: 434.8349267762944 usec\nrounds: 1352"
          }
        ]
      },
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
          "id": "6714b9f25d5034cf30ed08e3cfc45ea274f539c7",
          "message": "feat(pandas): add approx_median",
          "timestamp": "2023-05-02T08:40:21-07:00",
          "tree_id": "d6be9a1fd54bf101197a53dae5294ef09cb182a3",
          "url": "https://github.com/ibis-project/ibis/commit/6714b9f25d5034cf30ed08e3cfc45ea274f539c7"
        },
        "date": 1683042386956,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8013.8667729525105,
            "unit": "iter/sec",
            "range": "stddev: 0.000015324184859043835",
            "extra": "mean: 124.78370658407825 usec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2270.712062687406,
            "unit": "iter/sec",
            "range": "stddev: 0.00013903393163788044",
            "extra": "mean: 440.3904909090464 usec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 113.14791181546889,
            "unit": "iter/sec",
            "range": "stddev: 0.0002269656389384504",
            "extra": "mean: 8.837989000016933 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.005101021145999,
            "unit": "iter/sec",
            "range": "stddev: 0.023083652957789334",
            "extra": "mean: 124.92034733333588 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1808750430488345,
            "unit": "iter/sec",
            "range": "stddev: 0.03916283010445532",
            "extra": "mean: 5.5286787118000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.07666334302884,
            "unit": "iter/sec",
            "range": "stddev: 0.0005975861242897002",
            "extra": "mean: 9.992339538463021 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3375349833378407,
            "unit": "iter/sec",
            "range": "stddev: 0.007620972866566446",
            "extra": "mean: 747.6439961999972 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9226592564668746,
            "unit": "iter/sec",
            "range": "stddev: 0.004574118078840089",
            "extra": "mean: 1.083823733400004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11819.813675850311,
            "unit": "iter/sec",
            "range": "stddev: 0.000016002093539580697",
            "extra": "mean: 84.60370251378437 usec\nrounds: 4733"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 95.54870159877076,
            "unit": "iter/sec",
            "range": "stddev: 0.008953343356952269",
            "extra": "mean: 10.465866969068946 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 432.9030742345167,
            "unit": "iter/sec",
            "range": "stddev: 0.00003782158386499236",
            "extra": "mean: 2.309985905663192 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5901317.912457104,
            "unit": "iter/sec",
            "range": "stddev: 1.0156402873421786e-8",
            "extra": "mean: 169.45367371089668 nsec\nrounds: 188715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.38088666903326,
            "unit": "iter/sec",
            "range": "stddev: 0.0007184116294329728",
            "extra": "mean: 9.863792208333974 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2335.4301047254726,
            "unit": "iter/sec",
            "range": "stddev: 0.00010954774785038145",
            "extra": "mean: 428.18665306087115 usec\nrounds: 392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 123.83211244012693,
            "unit": "iter/sec",
            "range": "stddev: 0.00007919858453989673",
            "extra": "mean: 8.075449738318094 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 676.0152314750463,
            "unit": "iter/sec",
            "range": "stddev: 0.000020251190600121006",
            "extra": "mean: 1.479256610561907 msec\nrounds: 606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.918227381012098,
            "unit": "iter/sec",
            "range": "stddev: 0.00009553587729908796",
            "extra": "mean: 52.859075000001475 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.08038707723948,
            "unit": "iter/sec",
            "range": "stddev: 0.0006055010223414046",
            "extra": "mean: 9.89311605263107 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6284000.649165659,
            "unit": "iter/sec",
            "range": "stddev: 4.198551472153448e-9",
            "extra": "mean: 159.13429291779656 nsec\nrounds: 48544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 183.8608828024079,
            "unit": "iter/sec",
            "range": "stddev: 0.013251622976129232",
            "extra": "mean: 5.438894803277338 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.47548795635724,
            "unit": "iter/sec",
            "range": "stddev: 0.000568436303017827",
            "extra": "mean: 36.396077899996726 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1177.2390042391673,
            "unit": "iter/sec",
            "range": "stddev: 0.00004535105224836087",
            "extra": "mean: 849.4451818186958 usec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.8232830448756,
            "unit": "iter/sec",
            "range": "stddev: 0.0007257081735810032",
            "extra": "mean: 9.820936529411252 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.84694627432683,
            "unit": "iter/sec",
            "range": "stddev: 0.00012598349736848727",
            "extra": "mean: 6.103256867086879 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.809151638596894,
            "unit": "iter/sec",
            "range": "stddev: 0.0003739732690958861",
            "extra": "mean: 17.004156192310933 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.16621371549317,
            "unit": "iter/sec",
            "range": "stddev: 0.00005632931179297939",
            "extra": "mean: 5.258557661015934 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2333.055750518074,
            "unit": "iter/sec",
            "range": "stddev: 0.00007884168415037001",
            "extra": "mean: 428.6224192362063 usec\nrounds: 1362"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2347.894789319388,
            "unit": "iter/sec",
            "range": "stddev: 0.00008072866362045677",
            "extra": "mean: 425.91346279612543 usec\nrounds: 1774"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 280.2738259451039,
            "unit": "iter/sec",
            "range": "stddev: 0.00023437575022525135",
            "extra": "mean: 3.5679393058839035 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 272.65633917886316,
            "unit": "iter/sec",
            "range": "stddev: 0.0002324989653027094",
            "extra": "mean: 3.6676205769197168 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 186.25578204836327,
            "unit": "iter/sec",
            "range": "stddev: 0.003700049993634122",
            "extra": "mean: 5.368960839778598 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.23788200550188,
            "unit": "iter/sec",
            "range": "stddev: 0.022710375821392004",
            "extra": "mean: 26.85437372222863 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.4315220469412,
            "unit": "iter/sec",
            "range": "stddev: 0.00005081277963670451",
            "extra": "mean: 5.0908326198329314 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.93349562005704,
            "unit": "iter/sec",
            "range": "stddev: 0.00023259847089743233",
            "extra": "mean: 14.720278867922037 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.23368004944273,
            "unit": "iter/sec",
            "range": "stddev: 0.00003290136564489075",
            "extra": "mean: 9.878135414138834 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 758.6903525124615,
            "unit": "iter/sec",
            "range": "stddev: 0.000011326311613232352",
            "extra": "mean: 1.3180607828851691 msec\nrounds: 631"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 89.13122571525331,
            "unit": "iter/sec",
            "range": "stddev: 0.012836386570075364",
            "extra": "mean: 11.219412635417925 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 274.25133883937315,
            "unit": "iter/sec",
            "range": "stddev: 0.00025877908362527966",
            "extra": "mean: 3.6462903124994117 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 130.7063092464855,
            "unit": "iter/sec",
            "range": "stddev: 0.00035614369542832496",
            "extra": "mean: 7.650740088714491 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4549854.157258252,
            "unit": "iter/sec",
            "range": "stddev: 1.1076891882257334e-8",
            "extra": "mean: 219.7872646983239 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.795582807398123,
            "unit": "iter/sec",
            "range": "stddev: 0.003193252432569852",
            "extra": "mean: 1.2569401835999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.20835680864968,
            "unit": "iter/sec",
            "range": "stddev: 0.0006440403141898765",
            "extra": "mean: 9.78393578787456 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1046271.4688134302,
            "unit": "iter/sec",
            "range": "stddev: 1.3934664914801703e-7",
            "extra": "mean: 955.7748918969315 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12249500.79046234,
            "unit": "iter/sec",
            "range": "stddev: 3.3245191829409357e-9",
            "extra": "mean: 81.63597987417059 nsec\nrounds: 125016"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2341.9147841533654,
            "unit": "iter/sec",
            "range": "stddev: 0.00015234360602722554",
            "extra": "mean: 427.00101932253426 usec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.41492895879233,
            "unit": "iter/sec",
            "range": "stddev: 0.0007306753923253778",
            "extra": "mean: 9.860481196080388 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.69950616361606,
            "unit": "iter/sec",
            "range": "stddev: 0.024118016593500505",
            "extra": "mean: 26.52554639999778 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1863813.1464858125,
            "unit": "iter/sec",
            "range": "stddev: 8.951107151995847e-8",
            "extra": "mean: 536.5344706820438 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2389.81636583702,
            "unit": "iter/sec",
            "range": "stddev: 0.0001171332131353225",
            "extra": "mean: 418.44219258652356 usec\nrounds: 1241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.14473662076949,
            "unit": "iter/sec",
            "range": "stddev: 0.0006384256178767234",
            "extra": "mean: 9.790029648935096 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2369.690237999918,
            "unit": "iter/sec",
            "range": "stddev: 0.00008516146654119036",
            "extra": "mean: 421.9960836923677 usec\nrounds: 1625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 230.08757169113008,
            "unit": "iter/sec",
            "range": "stddev: 0.009533711439956842",
            "extra": "mean: 4.346171297519718 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.70186711472626,
            "unit": "iter/sec",
            "range": "stddev: 0.0007854025981048089",
            "extra": "mean: 10.449116931033455 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.96252586362347,
            "unit": "iter/sec",
            "range": "stddev: 0.0006591095944348597",
            "extra": "mean: 9.618850558823334 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.976056385914,
            "unit": "iter/sec",
            "range": "stddev: 0.00005049374123367054",
            "extra": "mean: 6.330073195124812 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 266.49465613036136,
            "unit": "iter/sec",
            "range": "stddev: 0.0037802529932937845",
            "extra": "mean: 3.7524204594587793 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1900421.7370673046,
            "unit": "iter/sec",
            "range": "stddev: 1.5649224584527216e-7",
            "extra": "mean: 526.1989907267538 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4672.489046355605,
            "unit": "iter/sec",
            "range": "stddev: 0.00004488756448860194",
            "extra": "mean: 214.01869326584483 usec\nrounds: 1930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2375.132643301477,
            "unit": "iter/sec",
            "range": "stddev: 0.00008325646464289445",
            "extra": "mean: 421.0291171822648 usec\nrounds: 1391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 273.8574522955243,
            "unit": "iter/sec",
            "range": "stddev: 0.0002490684515729133",
            "extra": "mean: 3.6515347368414237 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9247548643160104,
            "unit": "iter/sec",
            "range": "stddev: 0.002409367813628655",
            "extra": "mean: 1.0813676559999976 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 540.424032909082,
            "unit": "iter/sec",
            "range": "stddev: 0.00002236416138289117",
            "extra": "mean: 1.8503988333328518 msec\nrounds: 456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.93313934627787,
            "unit": "iter/sec",
            "range": "stddev: 0.00022529352064295382",
            "extra": "mean: 3.6639009919981618 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 50.37258716433814,
            "unit": "iter/sec",
            "range": "stddev: 0.0001477832217978427",
            "extra": "mean: 19.85206748935781 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2541839.2467404394,
            "unit": "iter/sec",
            "range": "stddev: 1.4760951026634526e-8",
            "extra": "mean: 393.41590987001075 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.516029962782845,
            "unit": "iter/sec",
            "range": "stddev: 0.0017686888838745764",
            "extra": "mean: 397.4515466000071 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.15825282763085,
            "unit": "iter/sec",
            "range": "stddev: 0.03377026920584857",
            "extra": "mean: 39.74838820689958 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6339805.748542856,
            "unit": "iter/sec",
            "range": "stddev: 5.6833748349166334e-8",
            "extra": "mean: 157.7335394276201 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.71984546791039,
            "unit": "iter/sec",
            "range": "stddev: 0.0006489655412253706",
            "extra": "mean: 10.12967549999921 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.06589816227337,
            "unit": "iter/sec",
            "range": "stddev: 0.00011123160274377332",
            "extra": "mean: 17.836154111108094 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.61861655795327,
            "unit": "iter/sec",
            "range": "stddev: 0.000029103728414597712",
            "extra": "mean: 9.292072617022482 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9866.046013054201,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016384767273188973",
            "extra": "mean: 101.35772716616725 usec\nrounds: 5113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13349.112606235132,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031374916381583024",
            "extra": "mean: 74.91134650650245 usec\nrounds: 6554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 401.7147043890374,
            "unit": "iter/sec",
            "range": "stddev: 0.00003068751945883981",
            "extra": "mean: 2.489328842271001 msec\nrounds: 317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 142468.40050987285,
            "unit": "iter/sec",
            "range": "stddev: 3.3525071863817304e-7",
            "extra": "mean: 7.019100350822717 usec\nrounds: 51021"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7319592.854749764,
            "unit": "iter/sec",
            "range": "stddev: 4.335371005198604e-9",
            "extra": "mean: 136.6196207691053 nsec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 171.78641274915933,
            "unit": "iter/sec",
            "range": "stddev: 0.000058840962828116686",
            "extra": "mean: 5.821182152864378 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1761.255125749389,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054384139016180366",
            "extra": "mean: 567.7769139632819 usec\nrounds: 1418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.8130465887514,
            "unit": "iter/sec",
            "range": "stddev: 0.00007789915429934775",
            "extra": "mean: 9.024208166671862 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.94086951230061,
            "unit": "iter/sec",
            "range": "stddev: 0.00006232995009232627",
            "extra": "mean: 9.620854671430834 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1623133.2486542847,
            "unit": "iter/sec",
            "range": "stddev: 8.416628389547023e-8",
            "extra": "mean: 616.0923638457193 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.53217113915672,
            "unit": "iter/sec",
            "range": "stddev: 0.014537279923844331",
            "extra": "mean: 11.691507261905562 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.019823662612,
            "unit": "iter/sec",
            "range": "stddev: 0.0007119543874014228",
            "extra": "mean: 10.307171897956815 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6677968614403609,
            "unit": "iter/sec",
            "range": "stddev: 0.0013946369201282953",
            "extra": "mean: 599.5934055999896 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.09742235204365,
            "unit": "iter/sec",
            "range": "stddev: 0.0007726705798113483",
            "extra": "mean: 10.515532127654035 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.715300629260994,
            "unit": "iter/sec",
            "range": "stddev: 0.00028401589331785554",
            "extra": "mean: 21.406262756096478 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 247.1619450270719,
            "unit": "iter/sec",
            "range": "stddev: 0.00039302246612073086",
            "extra": "mean: 4.0459302903222785 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 86.13713097059761,
            "unit": "iter/sec",
            "range": "stddev: 0.01623417565629655",
            "extra": "mean: 11.60939525999936 msec\nrounds: 100"
          }
        ]
      }
    ]
  }
}