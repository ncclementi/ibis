window.BENCHMARK_DATA = {
  "lastUpdate": 1681399141391,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "0e00d86eede64170130de0af67025f3fed6873a9",
          "message": "fix(bigquery): ensure that bigquery temporal ops work with the new timeunit/dateunit/intervalunit enums",
          "timestamp": "2023-04-13T15:13:49Z",
          "tree_id": "e80b9d7ac355761a9d4703fcfaa0157b89f39357",
          "url": "https://github.com/ibis-project/ibis/commit/0e00d86eede64170130de0af67025f3fed6873a9"
        },
        "date": 1681399055016,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 96.05140987126552,
            "unit": "iter/sec",
            "range": "stddev: 0.000675469828216828",
            "extra": "mean: 10.411091324325865 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4737.847539959326,
            "unit": "iter/sec",
            "range": "stddev: 0.000022213167820917423",
            "extra": "mean: 211.06631050618083 usec\nrounds: 1066"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.09075135130193,
            "unit": "iter/sec",
            "range": "stddev: 0.0008293360728102235",
            "extra": "mean: 10.406828814815494 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.43169344648467,
            "unit": "iter/sec",
            "range": "stddev: 0.00010782829707714797",
            "extra": "mean: 13.43513701886933 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1171.5683708991717,
            "unit": "iter/sec",
            "range": "stddev: 0.000013181259878208115",
            "extra": "mean: 853.556672268735 usec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.77913981747992,
            "unit": "iter/sec",
            "range": "stddev: 0.0007962176924143675",
            "extra": "mean: 9.92268838383707 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.47370704187379,
            "unit": "iter/sec",
            "range": "stddev: 0.019409452463633",
            "extra": "mean: 26.685377000001154 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.44651615383133,
            "unit": "iter/sec",
            "range": "stddev: 0.0007806687020631384",
            "extra": "mean: 9.955546875000872 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1754.4484518474328,
            "unit": "iter/sec",
            "range": "stddev: 0.000011694279719115588",
            "extra": "mean: 569.979698717851 usec\nrounds: 1092"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.05062696205349,
            "unit": "iter/sec",
            "range": "stddev: 0.0007128955387869258",
            "extra": "mean: 10.411176185191042 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 497380.70545327466,
            "unit": "iter/sec",
            "range": "stddev: 3.672758806277943e-7",
            "extra": "mean: 2.0105323528556993 usec\nrounds: 2040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2320.4239378349394,
            "unit": "iter/sec",
            "range": "stddev: 0.00008308907473935315",
            "extra": "mean: 430.95573343078223 usec\nrounds: 1373"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.46508031704762,
            "unit": "iter/sec",
            "range": "stddev: 0.00005080867020350886",
            "extra": "mean: 9.392751097562229 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.87279140131749,
            "unit": "iter/sec",
            "range": "stddev: 0.0002029502821813939",
            "extra": "mean: 15.180774622221332 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2281.9994176598434,
            "unit": "iter/sec",
            "range": "stddev: 0.00008508589905146533",
            "extra": "mean: 438.21220648052804 usec\nrounds: 1327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9434891901851703,
            "unit": "iter/sec",
            "range": "stddev: 0.004835900927394764",
            "extra": "mean: 1.0598955562000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2405.2967620581594,
            "unit": "iter/sec",
            "range": "stddev: 0.00008215305475787714",
            "extra": "mean: 415.7491149426078 usec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 684.1893304051035,
            "unit": "iter/sec",
            "range": "stddev: 0.000027545742757544392",
            "extra": "mean: 1.461583739413047 msec\nrounds: 307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.36328928699442,
            "unit": "iter/sec",
            "range": "stddev: 0.00005130813300513288",
            "extra": "mean: 5.145004510205693 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2358.638297625618,
            "unit": "iter/sec",
            "range": "stddev: 0.00008307665871607759",
            "extra": "mean: 423.97344306953494 usec\nrounds: 1212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.68638504076237,
            "unit": "iter/sec",
            "range": "stddev: 0.0004853352775587117",
            "extra": "mean: 10.450807599994505 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.9472047503224,
            "unit": "iter/sec",
            "range": "stddev: 0.0010283426575910031",
            "extra": "mean: 40.08465116666334 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140959.57351617105,
            "unit": "iter/sec",
            "range": "stddev: 4.027708688040305e-7",
            "extra": "mean: 7.09423258779425 usec\nrounds: 41494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8500047312708363,
            "unit": "iter/sec",
            "range": "stddev: 0.002118926330911791",
            "extra": "mean: 1.1764640397999984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.75837998252135,
            "unit": "iter/sec",
            "range": "stddev: 0.00045679304873368206",
            "extra": "mean: 173.659953500002 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 281.4960196042031,
            "unit": "iter/sec",
            "range": "stddev: 0.00009492982512978572",
            "extra": "mean: 3.5524480999981733 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13647.134467399845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016505213125656274",
            "extra": "mean: 73.27545591265267 usec\nrounds: 7247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.89797386202224,
            "unit": "iter/sec",
            "range": "stddev: 0.00006268282442706178",
            "extra": "mean: 6.101356694267933 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1768013.6348118582,
            "unit": "iter/sec",
            "range": "stddev: 1.1826487254816409e-7",
            "extra": "mean: 565.6064977725209 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.4080960613802,
            "unit": "iter/sec",
            "range": "stddev: 0.00003261916589029565",
            "extra": "mean: 1.864252249998799 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.46725372417646,
            "unit": "iter/sec",
            "range": "stddev: 0.00033881809224722544",
            "extra": "mean: 7.4367548403363095 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 277.47461406713427,
            "unit": "iter/sec",
            "range": "stddev: 0.0002637967117633763",
            "extra": "mean: 3.603933294445641 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9717.27482484991,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018525164428078822",
            "extra": "mean: 102.909510950818 usec\nrounds: 4429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.55737699394842,
            "unit": "iter/sec",
            "range": "stddev: 0.00007960691469319105",
            "extra": "mean: 8.963997065422632 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 157.2781554987447,
            "unit": "iter/sec",
            "range": "stddev: 0.00007359618314228089",
            "extra": "mean: 6.358162052631533 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 90.28435050491551,
            "unit": "iter/sec",
            "range": "stddev: 0.012483094260016288",
            "extra": "mean: 11.076116673681506 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17947915560553085,
            "unit": "iter/sec",
            "range": "stddev: 0.09537562088726396",
            "extra": "mean: 5.5716776504 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.92951118957189,
            "unit": "iter/sec",
            "range": "stddev: 0.0006323022677381683",
            "extra": "mean: 22.763740659089848 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.329533274767435,
            "unit": "iter/sec",
            "range": "stddev: 0.00021527775671364259",
            "extra": "mean: 19.109667857140742 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 350.95458561698257,
            "unit": "iter/sec",
            "range": "stddev: 0.0001170011784282861",
            "extra": "mean: 2.8493715169499425 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5911240.598270115,
            "unit": "iter/sec",
            "range": "stddev: 9.446893481677805e-9",
            "extra": "mean: 169.16922655700878 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 223.02582743593385,
            "unit": "iter/sec",
            "range": "stddev: 0.012074670381851305",
            "extra": "mean: 4.483785629210406 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1612465.365338208,
            "unit": "iter/sec",
            "range": "stddev: 8.95792560235259e-8",
            "extra": "mean: 620.1683592690714 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7173804064536402,
            "unit": "iter/sec",
            "range": "stddev: 0.001426825006720308",
            "extra": "mean: 1.3939605696000057 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.778637135558703,
            "unit": "iter/sec",
            "range": "stddev: 0.0010122948001553588",
            "extra": "mean: 562.2282252000105 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11715786.02342619,
            "unit": "iter/sec",
            "range": "stddev: 3.5992176924177813e-9",
            "extra": "mean: 85.35492181234257 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 273.44284296923047,
            "unit": "iter/sec",
            "range": "stddev: 0.0003263743690683683",
            "extra": "mean: 3.6570713979613148 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.546674663768419,
            "unit": "iter/sec",
            "range": "stddev: 0.0016752200939407964",
            "extra": "mean: 392.66892399999733 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.273500245395523,
            "unit": "iter/sec",
            "range": "stddev: 0.00046243390007720975",
            "extra": "mean: 88.70359500000309 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 264.107683004405,
            "unit": "iter/sec",
            "range": "stddev: 0.0003715974508430996",
            "extra": "mean: 3.786334379311946 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2312.8283243408973,
            "unit": "iter/sec",
            "range": "stddev: 0.00008964524329369307",
            "extra": "mean: 432.3710452158082 usec\nrounds: 1902"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1745012.9416799713,
            "unit": "iter/sec",
            "range": "stddev: 1.1225885246622305e-7",
            "extra": "mean: 573.0616525040055 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2343.0222055736726,
            "unit": "iter/sec",
            "range": "stddev: 0.00011004449927631141",
            "extra": "mean: 426.7991987532858 usec\nrounds: 1444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 92.19828648930557,
            "unit": "iter/sec",
            "range": "stddev: 0.0007500413948449869",
            "extra": "mean: 10.846188558135445 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2335.9914786701656,
            "unit": "iter/sec",
            "range": "stddev: 0.00010512099359710774",
            "extra": "mean: 428.0837533573883 usec\nrounds: 1638"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7396040.300068518,
            "unit": "iter/sec",
            "range": "stddev: 4.5363711768937536e-9",
            "extra": "mean: 135.2074839277391 nsec\nrounds: 60976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 262.23168803842356,
            "unit": "iter/sec",
            "range": "stddev: 0.0002995012137392661",
            "extra": "mean: 3.8134216634164924 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11509.512821751478,
            "unit": "iter/sec",
            "range": "stddev: 0.00002141144285071684",
            "extra": "mean: 86.8846505918244 usec\nrounds: 5578"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.54125171843287,
            "unit": "iter/sec",
            "range": "stddev: 0.00034349644922053994",
            "extra": "mean: 21.03436413333384 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.16916243335245,
            "unit": "iter/sec",
            "range": "stddev: 0.0006294811038167669",
            "extra": "mean: 11.471946868418945 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 246.85625731170896,
            "unit": "iter/sec",
            "range": "stddev: 0.004196368820238692",
            "extra": "mean: 4.050940457779386 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.35944641704724,
            "unit": "iter/sec",
            "range": "stddev: 0.0007112509068222942",
            "extra": "mean: 10.48663805813822 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.20269275179018,
            "unit": "iter/sec",
            "range": "stddev: 0.00005783553591494378",
            "extra": "mean: 6.657670256634475 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1821971.1156824087,
            "unit": "iter/sec",
            "range": "stddev: 1.0088972363630065e-7",
            "extra": "mean: 548.8561214788829 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 62585.87350972867,
            "unit": "iter/sec",
            "range": "stddev: 6.4576980526935e-7",
            "extra": "mean: 15.978046545033118 usec\nrounds: 12547"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.28287657066306,
            "unit": "iter/sec",
            "range": "stddev: 0.00031827346173979526",
            "extra": "mean: 3.6592120682739844 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 96.93658662276101,
            "unit": "iter/sec",
            "range": "stddev: 0.0010123780018473812",
            "extra": "mean: 10.316022410522931 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 702734.397245785,
            "unit": "iter/sec",
            "range": "stddev: 2.010682959572002e-7",
            "extra": "mean: 1.423012739833546 usec\nrounds: 25511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.7000195422863,
            "unit": "iter/sec",
            "range": "stddev: 0.00001822250130906149",
            "extra": "mean: 1.3338668453157159 msec\nrounds: 459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 303.62017618310057,
            "unit": "iter/sec",
            "range": "stddev: 0.00013154123617866342",
            "extra": "mean: 3.293588761363942 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 93.50723194645285,
            "unit": "iter/sec",
            "range": "stddev: 0.0007567734699598729",
            "extra": "mean: 10.694359988889977 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6400629.685723708,
            "unit": "iter/sec",
            "range": "stddev: 8.60456320684357e-9",
            "extra": "mean: 156.2346283257804 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.08836579399605,
            "unit": "iter/sec",
            "range": "stddev: 0.0008332735926160201",
            "extra": "mean: 9.99117122221998 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 92.07200497284882,
            "unit": "iter/sec",
            "range": "stddev: 0.0008016213006212616",
            "extra": "mean: 10.86106466666921 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.836077907089013,
            "unit": "iter/sec",
            "range": "stddev: 0.00011361746197189868",
            "extra": "mean: 63.14694875000271 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9324670251420046,
            "unit": "iter/sec",
            "range": "stddev: 0.004786866660127814",
            "extra": "mean: 1.0724239818000114 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.21891594043188,
            "unit": "iter/sec",
            "range": "stddev: 0.0007811021358572134",
            "extra": "mean: 9.87957626999787 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.48297619141121,
            "unit": "iter/sec",
            "range": "stddev: 0.0008556726238061218",
            "extra": "mean: 10.4730711157907 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 115.622410488807,
            "unit": "iter/sec",
            "range": "stddev: 0.0002171697869161523",
            "extra": "mean: 8.648842346154048 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 252.23142867063646,
            "unit": "iter/sec",
            "range": "stddev: 0.0002535653835278844",
            "extra": "mean: 3.964612995574786 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.14461654009723,
            "unit": "iter/sec",
            "range": "stddev: 0.00016473554419069256",
            "extra": "mean: 10.621956270585997 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 168.16115887856364,
            "unit": "iter/sec",
            "range": "stddev: 0.003967708986505924",
            "extra": "mean: 5.94667643032921 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 97.56517410197078,
            "unit": "iter/sec",
            "range": "stddev: 0.0007531560131285587",
            "extra": "mean: 10.249558914893592 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 82.81226673564572,
            "unit": "iter/sec",
            "range": "stddev: 0.0001637827021988144",
            "extra": "mean: 12.075505712121267 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 102.79550145832674,
            "unit": "iter/sec",
            "range": "stddev: 0.00009012163774148426",
            "extra": "mean: 9.728052160000402 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8045.2038152919595,
            "unit": "iter/sec",
            "range": "stddev: 0.00001167921819821349",
            "extra": "mean: 124.29765894796168 usec\nrounds: 3973"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.31783396883486,
            "unit": "iter/sec",
            "range": "stddev: 0.001888481984768979",
            "extra": "mean: 26.796839303029408 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2318.364783950117,
            "unit": "iter/sec",
            "range": "stddev: 0.00009319286478650576",
            "extra": "mean: 431.3385050199748 usec\nrounds: 1295"
          }
        ]
      }
    ]
  }
}