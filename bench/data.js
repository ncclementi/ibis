window.BENCHMARK_DATA = {
  "lastUpdate": 1676522438169,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "016a082b3dfd41b9860c92f722378ca2725e3e0b",
          "message": "feat(datafusion): implement ops.StrRight",
          "timestamp": "2023-02-15T23:35:29-05:00",
          "tree_id": "94e719c1840bfd3a8bb9778f5c2d93087a64f6d2",
          "url": "https://github.com/ibis-project/ibis/commit/016a082b3dfd41b9860c92f722378ca2725e3e0b"
        },
        "date": 1676522361467,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.75296844222136,
            "unit": "iter/sec",
            "range": "stddev: 0.0006646461040839903",
            "extra": "mean: 18.60362374358715 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13578067977882213,
            "unit": "iter/sec",
            "range": "stddev: 0.022327284783773712",
            "extra": "mean: 7.364818040599994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 247.22204058616816,
            "unit": "iter/sec",
            "range": "stddev: 0.00023685417258896611",
            "extra": "mean: 4.044946792078008 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1522001.0169369378,
            "unit": "iter/sec",
            "range": "stddev: 8.478018232672014e-8",
            "extra": "mean: 657.02978439037 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.25174295863724,
            "unit": "iter/sec",
            "range": "stddev: 0.0003633286115642845",
            "extra": "mean: 4.519738405798452 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 14585.048156021885,
            "unit": "iter/sec",
            "range": "stddev: 0.0011857771496096054",
            "extra": "mean: 68.56336635317307 usec\nrounds: 5421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.54821942305642,
            "unit": "iter/sec",
            "range": "stddev: 0.0005786976871275304",
            "extra": "mean: 10.576613775511685 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 521.2312291693991,
            "unit": "iter/sec",
            "range": "stddev: 0.00004018843354738623",
            "extra": "mean: 1.9185343165134916 msec\nrounds: 436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 269.1459270157808,
            "unit": "iter/sec",
            "range": "stddev: 0.011790221785289866",
            "extra": "mean: 3.715456559524184 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 157.9592560985532,
            "unit": "iter/sec",
            "range": "stddev: 0.0006902923531529994",
            "extra": "mean: 6.330746451325934 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5463.606126698295,
            "unit": "iter/sec",
            "range": "stddev: 0.00005887691872918243",
            "extra": "mean: 183.02929911316807 usec\nrounds: 2708"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5703768661060423,
            "unit": "iter/sec",
            "range": "stddev: 0.05055511988744118",
            "extra": "mean: 1.7532267864000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 156.39376204643756,
            "unit": "iter/sec",
            "range": "stddev: 0.0006940475157098587",
            "extra": "mean: 6.394116919465579 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 248.44760071081893,
            "unit": "iter/sec",
            "range": "stddev: 0.00025555693642712187",
            "extra": "mean: 4.024993588744501 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.47991607203906,
            "unit": "iter/sec",
            "range": "stddev: 0.00016335523945350334",
            "extra": "mean: 6.734917599999335 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.98080197142127,
            "unit": "iter/sec",
            "range": "stddev: 0.0006116370942408438",
            "extra": "mean: 10.871833888888064 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 125896.07968787421,
            "unit": "iter/sec",
            "range": "stddev: 3.716178947045003e-7",
            "extra": "mean: 7.94305908872805 usec\nrounds: 33898"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7233391990288099,
            "unit": "iter/sec",
            "range": "stddev: 0.004968791648525402",
            "extra": "mean: 1.3824772684000095 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10820.08107172351,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027133422742885576",
            "extra": "mean: 92.4207492874831 usec\nrounds: 5967"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1484632.5999281458,
            "unit": "iter/sec",
            "range": "stddev: 9.76357529118877e-8",
            "extra": "mean: 673.5673189773677 nsec\nrounds: 81968"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 614.4064316569622,
            "unit": "iter/sec",
            "range": "stddev: 0.00007117766995350176",
            "extra": "mean: 1.6275871287726427 msec\nrounds: 497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.09371273254601,
            "unit": "iter/sec",
            "range": "stddev: 0.0008961666992136409",
            "extra": "mean: 29.330921153840652 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4600.282781974453,
            "unit": "iter/sec",
            "range": "stddev: 0.000039963214403872474",
            "extra": "mean: 217.37794118186739 usec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 116.91876385066786,
            "unit": "iter/sec",
            "range": "stddev: 0.0003465186880498127",
            "extra": "mean: 8.55294708107956 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.8071606439515,
            "unit": "iter/sec",
            "range": "stddev: 0.00036718318248478324",
            "extra": "mean: 25.121108459463688 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.20579609879707,
            "unit": "iter/sec",
            "range": "stddev: 0.00015581673704778877",
            "extra": "mean: 15.574917854164502 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.380911815988643,
            "unit": "iter/sec",
            "range": "stddev: 0.00009608795047824906",
            "extra": "mean: 74.7333226428647 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4334036.48335686,
            "unit": "iter/sec",
            "range": "stddev: 1.503358464794512e-8",
            "extra": "mean: 230.73179098525938 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5345954199433214,
            "unit": "iter/sec",
            "range": "stddev: 0.003136792857750889",
            "extra": "mean: 651.637550199996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 141.25072203759953,
            "unit": "iter/sec",
            "range": "stddev: 0.0006652721503303451",
            "extra": "mean: 7.07960982835762 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 234.84796228174832,
            "unit": "iter/sec",
            "range": "stddev: 0.00028117268966726335",
            "extra": "mean: 4.258073990866886 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.204635745873423,
            "unit": "iter/sec",
            "range": "stddev: 0.0027731589805370617",
            "extra": "mean: 453.5896697999988 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.69682263459364,
            "unit": "iter/sec",
            "range": "stddev: 0.0006724423105831411",
            "extra": "mean: 11.402921679006546 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 141.93119253319796,
            "unit": "iter/sec",
            "range": "stddev: 0.00012348675655202902",
            "extra": "mean: 7.045667567163562 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1669691.1434764313,
            "unit": "iter/sec",
            "range": "stddev: 9.442405165864555e-8",
            "extra": "mean: 598.9131606207839 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.042846435179184,
            "unit": "iter/sec",
            "range": "stddev: 0.00024223844509025505",
            "extra": "mean: 110.5846491111164 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.5508108662364,
            "unit": "iter/sec",
            "range": "stddev: 0.000028182943062862508",
            "extra": "mean: 5.863355295239866 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 82.73550989161512,
            "unit": "iter/sec",
            "range": "stddev: 0.0003681364076446379",
            "extra": "mean: 12.086708612904136 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1488777.8834148797,
            "unit": "iter/sec",
            "range": "stddev: 8.804674647170844e-8",
            "extra": "mean: 671.6918696469704 nsec\nrounds: 103083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.10244351874223,
            "unit": "iter/sec",
            "range": "stddev: 0.030998649989006255",
            "extra": "mean: 32.151814676470785 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5140.984376404051,
            "unit": "iter/sec",
            "range": "stddev: 0.00007481522977584182",
            "extra": "mean: 194.5152769943773 usec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 582202.2980327075,
            "unit": "iter/sec",
            "range": "stddev: 0.000001331056880563026",
            "extra": "mean: 1.717616030336969 usec\nrounds: 21322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11070685.144924793,
            "unit": "iter/sec",
            "range": "stddev: 3.459506703114867e-9",
            "extra": "mean: 90.32864605123666 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8469736680873676,
            "unit": "iter/sec",
            "range": "stddev: 0.006224194629810784",
            "extra": "mean: 1.1806742495999856 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 157.57106368737175,
            "unit": "iter/sec",
            "range": "stddev: 0.0006616456927215221",
            "extra": "mean: 6.346342891890646 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 153.89848059229752,
            "unit": "iter/sec",
            "range": "stddev: 0.0007489740482855728",
            "extra": "mean: 6.497789946667278 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4610164.568588705,
            "unit": "iter/sec",
            "range": "stddev: 6.601874162049186e-9",
            "extra": "mean: 216.91199633385904 nsec\nrounds: 48544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4528.138980967671,
            "unit": "iter/sec",
            "range": "stddev: 0.00006940240171546157",
            "extra": "mean: 220.84127810633106 usec\nrounds: 1859"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 246.5041144145158,
            "unit": "iter/sec",
            "range": "stddev: 0.0002527296191915426",
            "extra": "mean: 4.056727419642264 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 960.3112224626298,
            "unit": "iter/sec",
            "range": "stddev: 0.00001044655969687431",
            "extra": "mean: 1.0413290781248936 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.08115450586608,
            "unit": "iter/sec",
            "range": "stddev: 0.0006728318634150872",
            "extra": "mean: 10.629121265063224 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 377758.9428508798,
            "unit": "iter/sec",
            "range": "stddev: 7.429873308484315e-7",
            "extra": "mean: 2.647190804943431 usec\nrounds: 435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5474.619435191436,
            "unit": "iter/sec",
            "range": "stddev: 0.0000482113459691002",
            "extra": "mean: 182.66109851798896 usec\nrounds: 2832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 277.8723840038593,
            "unit": "iter/sec",
            "range": "stddev: 0.0000266250192816078",
            "extra": "mean: 3.5987743207547798 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.600920232309164,
            "unit": "iter/sec",
            "range": "stddev: 0.0008648714708567141",
            "extra": "mean: 17.36083374999773 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4875.84364526286,
            "unit": "iter/sec",
            "range": "stddev: 0.00004653397743585355",
            "extra": "mean: 205.09271271886516 usec\nrounds: 2005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1459.185551354416,
            "unit": "iter/sec",
            "range": "stddev: 0.000010334848644857607",
            "extra": "mean: 685.3138033554403 usec\nrounds: 1073"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.864710016148574,
            "unit": "iter/sec",
            "range": "stddev: 0.003327341968039883",
            "extra": "mean: 205.56209860001218 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 144.6836153373224,
            "unit": "iter/sec",
            "range": "stddev: 0.0006929383427861835",
            "extra": "mean: 6.911632652173858 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 138.4968787456438,
            "unit": "iter/sec",
            "range": "stddev: 0.00019340440951495143",
            "extra": "mean: 7.220379325923642 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.56364672604563,
            "unit": "iter/sec",
            "range": "stddev: 0.00008961110815211267",
            "extra": "mean: 14.800858870965921 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.25915635730772,
            "unit": "iter/sec",
            "range": "stddev: 0.00013577146678093104",
            "extra": "mean: 10.388622109756136 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.3445152459196,
            "unit": "iter/sec",
            "range": "stddev: 0.0007092629120526088",
            "extra": "mean: 12.293391840578483 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.899563475013494,
            "unit": "iter/sec",
            "range": "stddev: 0.0006147457651136064",
            "extra": "mean: 41.84176840909582 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4027.6752412118217,
            "unit": "iter/sec",
            "range": "stddev: 0.000046168587298019464",
            "extra": "mean: 248.28218267645784 usec\nrounds: 1697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 73.93343938171054,
            "unit": "iter/sec",
            "range": "stddev: 0.021327519690091095",
            "extra": "mean: 13.525679426830198 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 157.78929291197016,
            "unit": "iter/sec",
            "range": "stddev: 0.0007105481115654246",
            "extra": "mean: 6.337565632909546 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10710.942273871395,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016595684481904048",
            "extra": "mean: 93.36246750572366 usec\nrounds: 5247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.89347710115344,
            "unit": "iter/sec",
            "range": "stddev: 0.00012940665763884232",
            "extra": "mean: 9.911443521739503 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 239.86358672632545,
            "unit": "iter/sec",
            "range": "stddev: 0.00024049286401811145",
            "extra": "mean: 4.169036299540369 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57825.7621669086,
            "unit": "iter/sec",
            "range": "stddev: 6.382206602964418e-7",
            "extra": "mean: 17.29333021350578 usec\nrounds: 12180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.99902369141724,
            "unit": "iter/sec",
            "range": "stddev: 0.0007483821855154983",
            "extra": "mean: 11.236078313254986 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4890.929803332967,
            "unit": "iter/sec",
            "range": "stddev: 0.00012518458380067338",
            "extra": "mean: 204.4601006783089 usec\nrounds: 2066"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.69310615317142,
            "unit": "iter/sec",
            "range": "stddev: 0.0011286093511355293",
            "extra": "mean: 25.8443970882404 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9669.2323584903,
            "unit": "iter/sec",
            "range": "stddev: 0.00001487723350339856",
            "extra": "mean: 103.42082627913334 usec\nrounds: 3166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 263.5531014029466,
            "unit": "iter/sec",
            "range": "stddev: 0.00001545699077185984",
            "extra": "mean: 3.794301773254791 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.849477871518368,
            "unit": "iter/sec",
            "range": "stddev: 0.010887799997658786",
            "extra": "mean: 1.1771937016000038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 242.91348054472138,
            "unit": "iter/sec",
            "range": "stddev: 0.00016633855984325916",
            "extra": "mean: 4.116692073892111 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.08051138511652,
            "unit": "iter/sec",
            "range": "stddev: 0.0005415504587140836",
            "extra": "mean: 11.617031357145281 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5437274.802847629,
            "unit": "iter/sec",
            "range": "stddev: 5.0583893549696256e-9",
            "extra": "mean: 183.9156629487054 nsec\nrounds: 51814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 245.1941589372315,
            "unit": "iter/sec",
            "range": "stddev: 0.00023421748676227968",
            "extra": "mean: 4.07840057990939 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 259.8998977587839,
            "unit": "iter/sec",
            "range": "stddev: 0.00019415920486189276",
            "extra": "mean: 3.847635218879969 msec\nrounds: 233"
          }
        ]
      }
    ]
  }
}